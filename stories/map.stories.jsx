import React from 'react';

import { Map } from '../src/index';

export default {
  title: 'Map',
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

export const main = () => (
  <Map {...mapData} />
);
