import React from 'react';
import { PieChart } from '../src/index';

export default {
  title: 'Pie chart',
};

const pieChartData = {
  title: 'Pie Chart',
  className: 'testClass',
  order: 4,
  size: 'medium',
  data: [
    {
      id: 'desktop',
      label: 'desktop',
      value: 160,
      color: '#656da3',
    }, {
      id: 'mobile',
      label: 'mobile',
      value: 683,
      color: '#4d9c5d',
    },
  ],
};

export const main = () => (
  <PieChart {...pieChartData} />
);
