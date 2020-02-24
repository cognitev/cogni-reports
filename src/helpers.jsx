import React from 'react';
import PropTypes from 'prop-types';

export const UpIcon = ({ color }) => (
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    className="symbol-info"
    data-icon="caret-up"
    width="1em"
    height="1em"
    fill={color}
    aria-hidden="true"
  >
    <path
      d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
    />
  </svg>
);

UpIcon.propTypes = {
  color: PropTypes.string,
};

UpIcon.defaultProps = {
  color: null,
};

export const DownIcon = ({ color }) => (
  <svg
    viewBox="0 0 1024 1024"
    focusable="false"
    className="symbol-info"
    data-icon="caret-down"
    width="1em"
    height="1em"
    fill={color}
    aria-hidden="true"
  >
    <path
      d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
    />
  </svg>
);

DownIcon.propTypes = {
  color: PropTypes.string,
};

DownIcon.defaultProps = {
  color: null,
};

export const Fine = ({ color }) => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    className="symbol-info"
    data-icon="check"
    width="1em"
    height="1em"
    fill={color}
    aria-hidden="true"
  >
    <path
      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
    />
  </svg>
);

Fine.propTypes = {
  color: PropTypes.string,
};

Fine.defaultProps = {
  color: null,
};
