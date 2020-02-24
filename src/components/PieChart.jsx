import React, { useEffect, useRef, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';

const PieChart = ({
  title,
  data,
  order,
  size,
  className,
}) => {
  const [pieData, setPieData] = useState(data);
  const cogniCardRef = useRef(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(cogniCardRef?.current?.offsetWidth < 610);
  }, []);

  useDeepCompareEffect(() => {
    setPieData(data);
  }, [data]);

  return (
    <div style={{ order }} ref={cogniCardRef} className={`cogni-report__card cogni-report__${size} ${className}`}>
      {title && <h3>{title}</h3>}

      <div style={{ height: isMobile ? 150 : 300 }}>
        <ResponsivePie
          data={pieData}
          margin={{
            top: 20, right: 0, bottom: 20, left: 0,
          }}
          innerRadius={0.5}
          padAngle={1}
          colors={{ datum: 'color' }}
          slicesLabelsTextColor="#ffffff"
          tooltip={({
            id, label, value, color,
          }) => (
            <div className="cogni-report__pieChart-tooltip-container">
              <span
                style={{
                  backgroundColor: color,
                }}
                className="cogni-report__square"
              />
              <div
                key={id}
                className="cogni-report__tooltip-value"
              >
                <span className="cogni-report__capitalize">{label}</span>
                <span className="cogni-report__bold">{value}</span>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

PieChart.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  order: PropTypes.number,
  size: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PieChart.defaultProps = {
  title: null,
  className: null,
  order: null,
  size: null,
};


export default PieChart;
