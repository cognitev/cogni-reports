import React from 'react';
import ReportPage, {
  Statistics, LineChart, Map, PieChart,
} from '../src/index';

export default {
  title: 'cogni-report',
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

const mapData = {
  title: 'Map',
  className: 'custom-map',
  order: 3,
  size: 'medium',
  maxNumber: 10000,
  colors: ['#656da3', '#f6982e', '#4d9c5d', '#288cc2'],
  data: [
    {
      id: 'US',
      value: 748794,
    },
    {
      id: 'EG',
      value: 1000,
    },
  ],
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

const fullPageData = [
  {
    type: 'statistics',
    ...statisticsData,
  }, {
    type: 'lineChart',
    ...lineChartData,
  }, {
    type: 'map',
    ...mapData,
  }, {
    type: 'pieChart',
    ...pieChartData,
  },
];

export const FullReportPage = () => (
  <ReportPage
    title="Report Title"
    data={fullPageData}
    className="custom-full-page"
  />
);

export const LineChartComponent = () => (
  <LineChart {...lineChartData} />
);

export const StatisticsComponent = () => (
  <Statistics {...statisticsData} />
);

export const MapComponent = () => (
  <Map {...mapData} />
);

export const PieChartComponent = () => (
  <PieChart {...pieChartData} />
);
