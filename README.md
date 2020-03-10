# cogni-reports


[![Version](https://img.shields.io/npm/v/cogni-reports.svg?style=flat-square)](https://www.npmjs.com/package/cogni-reports)
[![License](https://img.shields.io/npm/l/cogni-reports.svg?style=flat-square)](https://www.npmjs.com/package/cogni-reports)
[![Downloads](https://img.shields.io/npm/dt/cogni-reports.svg?style=flat-square)](https://www.npmjs.com/package/cogni-reports)
![Filesize](https://img.shields.io/bundlephobia/min/cogni-reports.svg)
[![Build Status](https://img.shields.io/travis/Eslam-Yahya/cogni-reports/master.svg?style=flat-square)](https://travis-ci.org/Eslam-Yahya/cogni-reports) 
![Coveralls GitHub](https://img.shields.io/coveralls/github/Eslam-Yahya/cogni-reports.svg)

**cogni-reports** is a [React](https://facebook.github.io/react/) component library that specializes in report and analytics components.

## 🎥 Live Examples

See the [storybook](https://cogni-reports.now.sh/) for live examples.


## 🔨 Usage

Install **cogni-reports** using **yarn**:

```shell
  $ yarn add cogni-reports
```
or **npm**:
```shell
  $ npm i cogni-reports
```

Import the necessary components from the library:
```shell
  $ import ReportPage, { LineChart, Map, PieChart, Statistics } from 'cogni-reports';
```
<br/>
<br/>

## 🧱 Components
### - 📈 Line Chart
<br/>
<img src="https://i.ibb.co/7vsW6pS/line.png" />
<br/>
<br/>

##### Passed props
| Prop    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| size | Controls the chart size | `small`, `medium`, `large` | `large` | **false** |
| title | Title at the top of the chart | any string | _ | **false** |
| className | Sets line chart custom className | any string | _ | **false** |
| data | An array of objects, each of which describes a specific line on the chart | _  | _ | **true**
<br/>

##### Data object
| Name    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| id | An identification for the line | any string, example: `visits` | _ | **true** |
| color | Line color and legend background color | any color string | _ | **true** |
| expected | Expected number for this specific line, a horizontal line that represents this expected value appears if the prop is passed | any number | _ | **false**|
| data | An array of points, each of which is represented by an object that has `x` and `y` | _  | _ | **true**
| legend | If passed, a legend square for this line will be displayed | an object | _ | **false** |
| <small>legend.value</small> | The value presented on the legend | any number | _ | **false** |
| <small>legend.unit<small> | Legend value unit | any string | _ | **false** |
| <small>legend.color<small> | Text color for the legend | any color string | `#000000` | **false** |
| <small>legend.min<small> | Minimum value for this legend, if the legend value is lower than this number, a down arrow will be displayed | any number | _ | **false** |
| <small>legend.max<small> | Maximum value for this legend, if the legend value is higher than this number, an up arrow will be displayed. If the legend value is between `min` and `max`, a checkmark is displayed | any number | _ | **false** |
<br/>

##### 👨‍💻 Usage example

```shell
import { LineChart } from 'cogni-reports';

const data = {
  title: 'Line Chart',
  className: 'custom-line-chart',
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


const main = () => (
  <LineChart {...data} />
);

export default main;

```
<br/>

### - 🗺️ Map
This component shows the world map, with the passed countries highlighted, each country has a value, the country's group will be decided as compared with the passed `maxNumber`
<br/>
<img src="https://i.ibb.co/mhbQ7F6/map.png" />
<br/>
<br/>

##### Passed props
| Prop    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| size | Controls the chart size | `small`, `medium`, `large` | `large` | **false** |
| title | Title at the top of the chart | any string | _ | **false** |
| className | Sets line chart custom className | any string | _ | **false** |
| data | An array of objects, each of which describes a specific piece on the pie chart | _  | _ | **true**
| colors | An array of strings, the number of colors provided will be the number of groups the `maxNumber` will be divided into | _  | _ | **true**
| maxNumber | The maximum value number, the value of each country should be lower than this number | _  | _ | **true**
<br/>

##### Data object
| Name    | Description                              | Options       | Required |
|-----------|------------------------------------------|------------|----|
| id | Country code | example: `US` | **true** |
| value | Number associated with this country | any number (should be smaller than `maxNumber`) | **true** |
<br/>

##### 👨‍💻 Usage example

```shell
import { Map } from 'cogni-reports';

const data = {
  title: 'Map',
  className: 'custom-map',
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


const main = () => (
  <Map {...data} />
);

export default main;
```
<br/>

### - <img src="https://i.ibb.co/dm4X0tD/Webp-net-resizeimage.png" style="margin-bottom:-4px" /> Pie Chart

<br/>
<img src="https://i.ibb.co/D1jjfTb/pie.png" />
<br/>
<br/>

##### Passed props
| Prop    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| size | Controls the chart size | `small`, `medium`, `large` | `large` | **false** |
| title | Title at the top of the chart | any string | _ | **false** |
| className | Sets line chart custom className | any string | _ | **false** |
| data | An array of objects, each of which describes a specific piece on the pie chart | _  | _ | **true**
<br/>

##### Data object
| Name    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| id | An identification for the pie piece | any string, example: `visits` | _ | **true** |
| label | A label that appears when you hover on this pie piece | any string, example: `Visits` | _ | **true**
| color | Line color and legend background color | any color string | `#000000` | **false** |
| value | Number associated with this pie piece | any number | _ | **true**|
<br/>

##### 👨‍💻 Usage example

```shell
import { PieChart } from 'cogni-reports';

const data = {
  title: 'Pie Chart',
  className: 'testClass',
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


const main = () => (
  <PieChart {...data} />
);

export default main;
```
<br/>

### - 🔢 Statistics

<br/>
<img src="https://i.ibb.co/rHKb0Q7/statistics.png" />
<br/>
<br/>

##### Passed props
| Prop    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| size | Controls the chart size | `small`, `medium`, `large` | `large` | **false** |
| title | Title at the top of the chart | any string | _ | **false** |
| className | Sets line chart custom className | any string | _ | **false** |
| data | An array of objects, each of which describes a specific box in the statistics | _  | _ | **true**
<br/>

##### Data object
| Name    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| title | Box title | any string, example: `visits` | _ | **true** |
| backgroundColor | Box background color | any color string | `#ffffff` | **false** |
| color | Box text color | any color string | `#000000` | **false** |
| unit | Value unit | any string | _ | **false** |
| value | Number associated with box | any number | _ | **true**|
| min | Minimum value for this legend, if the legend value is lower than this number, a down arrow will be displayed | any number | _ | **false** |
| max | Maximum value for this legend, if the legend value is higher than this number, an up arrow will be displayed. If the legend value is between `min` and `max`, a checkmark is displayed | any number | _ | **false** |
<br/>

##### 👨‍💻 Usage example

```shell
import { Statistics } from 'cogni-reports';

const data = {
  title: 'Statistics',
  className: 'custom-statistics',
  size: 'large',
  data: [
    {
      title: 'visits',
      value: 20,
      unit: 'k',
      color: '#fff',
      backgroundColor: '#656da3',
      min: 10,
      max: 19,
    },
    {
      title: 'clicks',
      value: 20,
      unit: 'k',
      color: '#fff',
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

const main = () => (
  <Statistics {...data} />
);

export default main;
```
<br/>

### - 📙 Full Report

##### Passed props
| Prop    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| title | Title at the top of the chart | any string | _ | **false** |
| className | Sets line chart custom className | any string | _ | **false** |
| data | An array of objects, each of which resembles data provided to a specific component | _  | _ | **true**
<br/>

##### Data object
| Name    | Description                              | Options       | Default | Required |
|-----------|------------------------------------------|------------|---------|----|
| type | Box title | `statistics`, `lineChart`, `map`, `pieChart` | _ | **true** |
| order | Order of each component (in an ascending order) | any number starting from `1` | _ | **false** |
<br/>

##### 👨‍💻 Usage example

```shell
import FullReport from 'cogni-reports';

const data = [
  {
    type: 'statistics',
    order: 1,
    ...statisticsData,
  }, {
    type: 'lineChart',
    order: 2,
    ...lineChartData,
  }, {
    type: 'map',
    order: 3,
    ...mapData,
  }, {
    type: 'pieChart',
    order: 4,
    ...pieChartData,
  },
];

const main = () => (
  <FullReport
    title="Report Title"
    data={data}
    className="custom-full-page"
  />
);

export default main;
```
Where `statisticsData`, `lineChartData`, `mapData` and `pieChartData` are the regular data arrays passed to each of these components.

## 🌐 Browser Support
We support and test the **cogni-reports** against the following browsers:
* [Chrome](https://www.google.com/chrome/)
* [Firefox](https://www.mozilla.org/firefox/)
* [Safari](https://www.apple.com/safari/)
