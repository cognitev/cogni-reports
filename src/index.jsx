import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

import Statistics from './components/Statistics';
import LineChart from './components/LineChart';
import Map from './components/Map';
import PieChart from './components/PieChart';

const ReportPage = ({
  className,
  title: pageTitle,
  data,
}) => (
  <>
    {pageTitle && <h1>{pageTitle}</h1>}

    <div className={`cogni-report__container ${className}`}>
      {
        data.map((component) => {
          const { type, title, ...rest } = component;

          switch (type) {
            case 'statistics':
              return (
                <Statistics {...rest} title={title} key={title} />
              );
            case 'lineChart':
              return (
                <LineChart {...rest} title={title} key={title} />
              );
            case 'pieChart':
              return (
                <PieChart {...rest} title={title} key={title} />
              );
            case 'map':
              return (
                <Map {...rest} title={title} key={title} />
              );
            default:
              return null;
          }
        })
      }
    </div>
  </>
);


ReportPage.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ReportPage.defaultProps = {
  title: null,
  className: null,
};

export {
  Statistics,
  LineChart,
  Map,
  PieChart,
};

export default ReportPage;
