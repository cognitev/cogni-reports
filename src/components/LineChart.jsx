import React, { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';
import Statistics from './Statistics';

const LineChart = ({
  data,
  ...rest
}) => {
  const markers = [];
  const statisticsData = [];
  const allKeys = [];

  data.forEach((item) => {
    if (item.expected) {
      markers.push({
        id: item.id,
        axis: 'y',
        value: item.expected,
        lineStyle: {
          stroke: `${item.color}70`,
          strokeWidth: 2,
        },
        legend: `Expected ${item.id}`,
        textStyle: {
          fill: `${item.color}70`,
        },
      });
    }

    if (item.legend) {
      statisticsData.push({
        backgroundColor: item.color,
        title: item.id,
        ...item.legend,
        hasData: item.data.length,
      });
    }

    if (item.data.length) {
      allKeys.push(item.id);
    }
  });

  return (
    <LineChartInner
      markers={markers}
      boxes={statisticsData}
      allKeys={allKeys}
      data={data}
      {...rest}
    />
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const LineChartInner = ({
  title,
  data,
  markers,
  boxes,
  allKeys,
  order,
  size,
  className,
}) => {
  const [chartData, setChartData] = useState(data);
  const [markerData, setMarkerData] = useState(markers);
  const [statisticData, setStatisticData] = useState(boxes);
  const [visibleValues, setVisibleValues] = useState(allKeys);

  useDeepCompareEffect(() => {
    setChartData(data);
    setMarkerData(markers);
    setStatisticData(boxes);
    setVisibleValues(allKeys);
  }, [data, markers, boxes, allKeys]);

  const updateChartData = (id, isVisible) => {
    const itemToModify = chartData.find(e => e.id === id);
    const otherItems = chartData.filter(value => value.id !== id);
    const itemOldData = !isVisible && data.find(e => e.id === id).data;
    const newChartData = [...otherItems, {
      ...itemToModify, data: itemOldData || [],
    }];

    setChartData(newChartData);
  };

  const updateVisibleValues = (id, isVisible) => {
    const newShownValues = isVisible
      ? visibleValues.filter(value => value !== id)
      : [...visibleValues, id];

    setVisibleValues(newShownValues);
  };

  const updateMarkers = (id, isVisible) => {
    const oldMarker = !isVisible && markers.find(e => e.id === id);
    const newMarkers = oldMarker
      ? [...markerData, oldMarker]
      : markerData.filter(value => value.id !== id);
    setMarkerData(newMarkers);
  };

  const updateStatisticBoxes = (id, isVisible) => {
    const itemToModifyIndex = statisticData.findIndex(e => e.title === id);
    const itemToModify = isVisible
      ? statisticData.find(e => e.title === id)
      : boxes.find(e => e.title === id);
    const itemAfterModification = isVisible
      ? { ...itemToModify, backgroundColor: `${itemToModify.backgroundColor}80` }
      : { ...itemToModify };
    const newStatistics = [...statisticData];
    newStatistics.splice(itemToModifyIndex, 1, itemAfterModification);
    setStatisticData(newStatistics);
  };

  const onClick = (id) => {
    if (visibleValues.includes(id) && visibleValues.length > 1) {
      const isVisible = true;
      updateChartData(id, isVisible);
      updateVisibleValues(id, isVisible);
      updateMarkers(id, isVisible);
      updateStatisticBoxes(id, isVisible);
    } else if (!visibleValues.includes(id)) {
      const isVisible = false;
      updateChartData(id, isVisible);
      updateVisibleValues(id, isVisible);
      updateMarkers(id, isVisible);
      updateStatisticBoxes(id, isVisible);
    }
  };

  return (
    <div style={{ order }} className={`cogni-report__card cogni-report__${size} ${className}`}>
      {title && <h3>{title}</h3>}

      <Statistics
        sub
        data={statisticData.map(s => ({ ...s, onClick: () => s.hasData && onClick(s.title) }))}
      />

      <div style={{ height: 300 }}>
        <ResponsiveLine
          data={chartData}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 40,
          }}
          enableSlices="x"
          colors={{ datum: 'color' }}
          useMesh
          markers={markerData}
          axisBottom={{
            format: () => null,
            orient: 'bottom',
            tickSize: 0,
            legend: 'Date',
            legendOffset: 10,
          }}
          sliceTooltip={({ slice }) => (
            <div className="cogni-report__lineChart-tooltip-container ">
              <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                {slice.points[0].data.x}
              </div>
              {slice.points.map(point => (
                <div
                  className="cogni-report__lineChart-tooltip-row"
                  key={point.id}
                >
                  <span
                    style={{
                      backgroundColor: point.serieColor,
                    }}
                    className="cogni-report__square"
                  />
                  <div
                    className="cogni-report__tooltip-value"
                  >
                    <span className="cogni-report__capitalize">{point.serieId}</span>
                    <span className="cogni-report__bold">{point.data.yFormatted}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
};

LineChartInner.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  order: PropTypes.number,
  size: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  allKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  boxes: PropTypes.arrayOf(PropTypes.object),
  markers: PropTypes.arrayOf(PropTypes.object),
};

LineChartInner.defaultProps = {
  title: null,
  className: null,
  order: null,
  size: null,
  boxes: null,
  markers: null,
};

export default LineChart;
