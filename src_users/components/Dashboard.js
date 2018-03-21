import React from "react";
import ReactHighcharts from "react-highcharts";
import WordCloud from 'react-d3-cloud';

const config2 = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Historic and Estimated Worldwide Population Growth by Region'
  },
  subtitle: {
    text: 'Source: Wikipedia.org'
  },
  xAxis: {
    categories: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: 'Billions'
    },
    labels: {
      formatter: function () {
        return this.value / 1000;
      }
    }
  },
  tooltip: {
    split: true,
    valueSuffix: ''
  },
  plotOptions: {
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      }
    }
  },
  series: [{
    name: 'Q1',
    data: [2.94, 3.1, 2.8, 3.26, 3.08]
  }, {
    name: 'Q2',
    data: [3.08, 3.5, 3.26, 3.06, 2.88]
  }, {
    name: 'Q3',
    data: [3.2, 2.68, 3.12, 2.96, 2.84]
  }, {
    name: 'Q4',
    data: [3, 2.66, 2.88, 2.64, 2.72]
  }]
};

const config = {
  title: {
    text: 'Feedback 1'
  },
  xAxis: {
    categories: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        },
        yAxis: {
          labels: {
            align: 'left',
            x: 0,
            y: -5
          },
          title: {
            text: null
          }
        },
        subtitle: {
          text: null
        },
        credits: {
          enabled: false
        }
      }
    }]
  }
};

const barChartConfig = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Browser market shares. January, 2015 to May, 2015'
  },
  subtitle: {
    text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total percent market share'
    }

  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Microsoft Internet Explorer',
      y: 56.33,
      drilldown: 'Microsoft Internet Explorer'
    }, {
      name: 'Chrome',
      y: 24.03,
      drilldown: 'Chrome'
    }, {
      name: 'Firefox',
      y: 10.38,
      drilldown: 'Firefox'
    }, {
      name: 'Safari',
      y: 4.77,
      drilldown: 'Safari'
    }, {
      name: 'Opera',
      y: 0.91,
      drilldown: 'Opera'
    }, {
      name: 'Proprietary or Undetectable',
      y: 0.2,
      drilldown: null
    }]
  }],
  drilldown: {
    series: [{
      name: 'Microsoft Internet Explorer',
      id: 'Microsoft Internet Explorer',
      data: [
        [
          'v11.0',
          24.13
        ],
        [
          'v8.0',
          17.2
        ],
        [
          'v9.0',
          8.11
        ],
        [
          'v10.0',
          5.33
        ],
        [
          'v6.0',
          1.06
        ],
        [
          'v7.0',
          0.5
        ]
      ]
    }, {
      name: 'Chrome',
      id: 'Chrome',
      data: [
        [
          'v40.0',
          5
        ],
        [
          'v41.0',
          4.32
        ],
        [
          'v42.0',
          3.68
        ],
        [
          'v39.0',
          2.96
        ],
        [
          'v36.0',
          2.53
        ],
        [
          'v43.0',
          1.45
        ],
        [
          'v31.0',
          1.24
        ],
        [
          'v35.0',
          0.85
        ],
        [
          'v38.0',
          0.6
        ],
        [
          'v32.0',
          0.55
        ],
        [
          'v37.0',
          0.38
        ],
        [
          'v33.0',
          0.19
        ],
        [
          'v34.0',
          0.14
        ],
        [
          'v30.0',
          0.14
        ]
      ]
    }, {
      name: 'Firefox',
      id: 'Firefox',
      data: [
        [
          'v35',
          2.76
        ],
        [
          'v36',
          2.32
        ],
        [
          'v37',
          2.31
        ],
        [
          'v34',
          1.27
        ],
        [
          'v38',
          1.02
        ],
        [
          'v31',
          0.33
        ],
        [
          'v33',
          0.22
        ],
        [
          'v32',
          0.15
        ]
      ]
    }, {
      name: 'Safari',
      id: 'Safari',
      data: [
        [
          'v8.0',
          2.56
        ],
        [
          'v7.1',
          0.77
        ],
        [
          'v5.1',
          0.42
        ],
        [
          'v5.0',
          0.3
        ],
        [
          'v6.1',
          0.29
        ],
        [
          'v7.0',
          0.26
        ],
        [
          'v6.2',
          0.17
        ]
      ]
    }, {
      name: 'Opera',
      id: 'Opera',
      data: [
        [
          'v12.x',
          0.34
        ],
        [
          'v28',
          0.24
        ],
        [
          'v27',
          0.17
        ],
        [
          'v29',
          0.16
        ]
      ]
    }]
  }
}

var wordCloudData = [
  {
    "text": "Lorem",
    "value": 1
  },
  {
    "text": "ipsum",
    "value": 1
  },
  {
    "text": "dolor",
    "value": 1
  },
  {
    "text": "sit",
    "value": 2
  },
  {
    "text": "amet",
    "value": 2
  },
  {
    "text": "consectetur",
    "value": 2
  },
  {
    "text": "adipiscing",
    "value": 1
  },
  {
    "text": "elit",
    "value": 2
  },
  {
    "text": "Aenean",
    "value": 1
  },
  {
    "text": "bibendum",
    "value": 1
  },
  {
    "text": "erat",
    "value": 3
  },
  {
    "text": "ac",
    "value": 4
  },
  {
    "text": "justo",
    "value": 2
  },
  {
    "text": "sollicitudin",
    "value": 2
  },
  {
    "text": "quis",
    "value": 1
  },
  {
    "text": "lacinia",
    "value": 2
  },
  {
    "text": "ligula",
    "value": 1
  },
  {
    "text": "fringilla",
    "value": 1
  },
  {
    "text": "Pellentesque",
    "value": 1
  },
  {
    "text": "hendrerit",
    "value": 2
  },
  {
    "text": "nisi",
    "value": 1
  },
  {
    "text": "vitae",
    "value": 3
  },
  {
    "text": "posuere",
    "value": 2
  },
  {
    "text": "condimentum",
    "value": 2
  },
  {
    "text": "lectus",
    "value": 1
  },
  {
    "text": "urna",
    "value": 1
  },
  {
    "text": "accumsan",
    "value": 2
  },
  {
    "text": "libero",
    "value": 1
  },
  {
    "text": "rutrum",
    "value": 1
  },
  {
    "text": "commodo",
    "value": 1
  },
  {
    "text": "mi",
    "value": 2
  },
  {
    "text": "lacus",
    "value": 1
  },
  {
    "text": "pretium",
    "value": 5
  },
  {
    "text": "Phasellus",
    "value": 1
  },
  {
    "text": "ultrices",
    "value": 1
  },
  {
    "text": "sed",
    "value": 1
  },
  {
    "text": "semper",
    "value": 1
  },
  {
    "text": "Praesent",
    "value": 3
  },
  {
    "text": "ut",
    "value": 3
  },
  {
    "text": "tristique",
    "value": 2
  },
  {
    "text": "magna",
    "value": 1
  },
  {
    "text": "Donec",
    "value": 1
  },
  {
    "text": "nisl",
    "value": 1
  },
  {
    "text": "tellus",
    "value": 3
  },
  {
    "text": "sagittis",
    "value": 1
  },
  {
    "text": "tempus",
    "value": 1
  },
  {
    "text": "eget",
    "value": 3
  },
  {
    "text": "Sed",
    "value": 1
  },
  {
    "text": "ornare",
    "value": 2
  },
  {
    "text": "gravida",
    "value": 1
  },
  {
    "text": "Curabitur",
    "value": 2
  },
  {
    "text": "iaculis",
    "value": 1
  },
  {
    "text": "metus",
    "value": 1
  },
  {
    "text": "purus",
    "value": 2
  },
  {
    "text": "est",
    "value": 1
  },
  {
    "text": "laoreet",
    "value": 1
  },
  {
    "text": "Quisque",
    "value": 1
  },
  {
    "text": "augue",
    "value": 1
  },
  {
    "text": "eros",
    "value": 3
  },
  {
    "text": "malesuada",
    "value": 1
  },
  {
    "text": "facilisis",
    "value": 2
  },
  {
    "text": "mauris",
    "value": 1
  },
  {
    "text": "Mauris",
    "value": 1
  },
  {
    "text": "molestie",
    "value": 1
  },
  {
    "text": "nulla",
    "value": 1
  },
  {
    "text": "quam",
    "value": 1
  },
  {
    "text": "placerat",
    "value": 1
  },
  {
    "text": "sem",
    "value": 1
  },
  {
    "text": "in",
    "value": 1
  },
  {
    "text": "mattis",
    "value": 1
  },
  {
    "text": "non",
    "value": 2
  },
  {
    "text": "odio",
    "value": 2
  },
  {
    "text": "Nunc",
    "value": 1
  },
  {
    "text": "aliquet",
    "value": 1
  },
  {
    "text": "nec",
    "value": 3
  },
  {
    "text": "auctor",
    "value": 1
  },
  {
    "text": "congue",
    "value": 1
  },
  {
    "text": "sapien",
    "value": 2
  },
  {
    "text": "dictum",
    "value": 1
  },
  {
    "text": "massa",
    "value": 2
  },
  {
    "text": "fermentum",
    "value": 1
  },
  {
    "text": "luctus",
    "value": 1
  },
  {
    "text": "et",
    "value": 2
  },
  {
    "text": "nunc",
    "value": 1
  },
  {
    "text": "In",
    "value": 1
  },
  {
    "text": "consequat",
    "value": 2
  },
  {
    "text": "interdum",
    "value": 1
  },
  {
    "text": "Ut",
    "value": 1
  },
  {
    "text": "neque",
    "value": 1
  },
  {
    "text": "dui",
    "value": 1
  },
  {
    "text": "maximus",
    "value": 1
  },
  {
    "text": "id",
    "value": 1
  },
  {
    "text": "Nullam",
    "value": 1
  },
  {
    "text": "vel",
    "value": 1
  },
  {
    "text": "lorem",
    "value": 1
  },
  {
    "text": "",
    "value": 1
  }
];

const fontSizeMapper = word => Math.log2(word.value) * 25;
const rotate = word => word.value % 360;

// Home page component
export default class Dashboard extends React.Component {
  // render
  render() {
    return (
      <div className="">
        <div className="chart-container">
          <ReactHighcharts config={config2}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={barChartConfig}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <WordCloud data={wordCloudData} fontSizeMapper={fontSizeMapper} rotate={rotate} />
        </div>
      </div>
    );
  }
}
