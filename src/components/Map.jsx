import React, { useRef, useEffect, useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';

import world from '../world_countries';

const Map = ({
  title,
  data,
  maxNumber = 100000,
  colors = 'nivo',
  order,
  size,
  className,
}) => {
  const [mapData, setMapData] = useState(data);

  const cogniCardRef = useRef(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(cogniCardRef?.current?.offsetWidth < 610);
  }, []);

  useDeepCompareEffect(() => {
    setMapData(data);
  }, [data]);

  return (
    <div style={{ order }} ref={cogniCardRef} className={`cogni-report__card cogni-report__${size} ${className}`}>
      {title && <h3>{title}</h3>}

      <div style={{ height: isMobile ? 250 : 350 }}>
        <ResponsiveChoropleth
          data={mapData}
          features={world.features}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          colors={colors}
          domain={[0, maxNumber]}
          unknownColor="#959393"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={isMobile ? 55 : 100}
          projectionTranslation={[0.5, 0.6]}
          projectionRotation={[-10, 0, 0]}
          borderWidth={1}
          borderColor="#b5b5b5"
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              translateX: 20,
              itemWidth: 94,
              itemHeight: 20,
              itemsSpacing: 4,
              symbolSize: 12,
              itemDirection: 'left-to-right',
            },
          ]}
          tooltip={({ feature: { color, value, label } }) => (
            <>
              {label ? (
                <div className="cogni-report__map-tooltip-container">
                  <span
                    style={{
                      backgroundColor: color,
                    }}
                    className="cogni-report__square"
                  />
                  <div
                    key={label}
                    className="cogni-report__tooltip-value"
                  >
                    <span className="cogni-report__capitalize">{label}</span>
                    <span className="cogni-report__bold">{value}</span>
                  </div>
                </div>
              ) : null}
            </>
          )}
        />
      </div>
    </div>
  );
};


Map.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  order: PropTypes.number,
  size: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxNumber: PropTypes.number,
  colors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Map.defaultProps = {
  title: null,
  className: null,
  order: null,
  size: null,
  maxNumber: null,
  colors: null,
};

export default Map;
