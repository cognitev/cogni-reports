import React from 'react';
import { LineChart } from '../src/index';

export default {
  title: 'Line chart',
};

const lineChartData = {
  title: 'Line Chart',
  className: 'custom-line-chart',
  order: 1,
  size: 'large',
  data: [
    {
      id: 'visits',
      color: '#656da3',
      expected: 55,
      legend: {
        value: 120,
        unit: 'k',
        color: '#fff',
        min: 10,
        max: 19,
      },
      data: [
        {
          x: '21-12-2019',
          y: 0,
        },
        {
          x: '22-12-2019',
          y: 6,
        },
        {
          x: '23-12-2019',
          y: 12,
        },
        {
          x: '24-12-2019',
          y: 10,
        },
        {
          x: '25-12-2019',
          y: 30,
        },
        {
          x: '26-12-2019',
          y: 42,
        },
        {
          x: '27-12-2019',
          y: 10,
        },
        {
          x: '28-12-2019',
          y: 45,
        },
        {
          x: '29-12-2019',
          y: 33,
        },
        {
          x: '30-12-2019',
          y: 51,
        },
      ],
    },
    {
      id: 'clicks',
      color: '#288cc2',
      expected: 126,
      legend: {
        value: 20,
        unit: 'k',
        color: '#fff',
        min: 10,
        max: 21,
      },
      data: [
        {
          x: '21-12-2019',
          y: 56,
        },
        {
          x: '22-12-2019',
          y: 251,
        },
        {
          x: '23-12-2019',
          y: 168,
        },
        {
          x: '24-12-2019',
          y: 144,
        },
        {
          x: '25-12-2019',
          y: 134,
        },
        {
          x: '26-12-2019',
          y: 71,
        },
        {
          x: '27-12-2019',
          y: 111,
        },
        {
          x: '28-12-2019',
          y: 155,
        },
        {
          x: '29-12-2019',
          y: 169,
        },
        {
          x: '30-12-2019',
          y: 110,
        },
      ],
    },
    {
      id: 'cost',
      color: '#4d9c5d',
      legend: {
        value: 500,
        unit: '$',
        color: '#fff',
        max: 450,
      },
      data: [],
    },
  ],
};


export const main = () => (
  <LineChart {...lineChartData} />
);
