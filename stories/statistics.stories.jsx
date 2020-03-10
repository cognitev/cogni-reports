import React from 'react';
import { Statistics } from '../src/index';

export default {
  title: 'Statistics chart',
};

const statisticsData = {
  title: 'Statistics',
  className: 'custom-statistics',
  order: 2,
  size: 'large',
  data: [
    {
      title: 'visits',
      value: 20,
      unit: 'k',
      textColor: '#fff',
      backgroundColor: '#656da3',
      min: 10,
      max: 19,
    },
    {
      title: 'clicks',
      value: 20,
      unit: 'k',
      textColor: '#fff',
      backgroundColor: '#f6982e',
      min: 10,
      max: 21,
    },
    {
      title: 'page per visits',
      value: 11,
      unit: '$',
      color: '#fff',
      backgroundColor: '#2a7886',
      max: 10,
    },
    {
      title: 'avg. se duration',
      value: 20,
      unit: '$',
      color: '#fff',
      backgroundColor: '#010a43',
    },
    {
      title: 'bounce rate',
      value: 15,
      unit: '$',
      color: '#fff',
      backgroundColor: '#4d9c5d',
    },
    {
      title: 'total conversion',
      value: 20,
      unit: '$',
      color: '#fff',
      backgroundColor: '#288cc2',
    },
  ],
};

export const main = () => (
  <Statistics {...statisticsData} />
);
