import React from 'react';
import PropTypes from 'prop-types';

import { UpIcon, DownIcon, Fine } from '../helpers';

const StatisticBox = ({
  title,
  value,
  unit,
  color = 'initial',
  backgroundColor = 'initial',
  min,
  max,
  onClick,
}) => {
  let icon;
  if (min || max) {
    const under = value < min;
    const over = value > max;

    if (under) {
      icon = <DownIcon color={color} />;
    } else if (over) {
      icon = <UpIcon color={color} />;
    } else {
      icon = <Fine color={color} />;
    }
  }


  return (
    <div
      className="cogni-report__statistic"
      style={{
        color,
        backgroundColor,
      }}
      {...(onClick ? {
        onClick,
        onKeyPress: onClick,
        role: 'button',
        tabIndex: '0',
      } : {})}
    >
      <div className="cogni-report__statistic-main">
        <span className="cogni-report__statistic-title">
          {title}
        </span>
        <span className="cogni-report__bold">
          {value}
          {unit && (
            <span className="cogni-report__statistic-unit">
              {unit}
            </span>
          )}
        </span>
      </div>
      {icon}
    </div>
  );
};

StatisticBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  unit: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onClick: PropTypes.func,
};

StatisticBox.defaultProps = {
  unit: null,
  color: 'initial',
  backgroundColor: PropTypes.string,
  min: null,
  max: null,
  onClick: null,
};

const Statistics = ({
  title,
  className,
  order,
  size,
  data,
  sub,
}) => (
  <div
    className={`${!sub ? 'cogni-report__card' : ''} cogni-report__${size} ${className}`}
    style={{ order }}
  >
    {title && <h3>{title}</h3>}

    <div className="cogni-report__statistics">
      {
        data.map(statistic => (<StatisticBox {...statistic} key={statistic.title} />))
      }
    </div>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  order: PropTypes.number,
  size: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sub: PropTypes.bool,
};

Statistics.defaultProps = {
  title: null,
  className: null,
  order: null,
  size: null,
  sub: false,
};

export default Statistics;
