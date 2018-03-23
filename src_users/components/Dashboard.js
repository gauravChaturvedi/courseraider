import React from "react";
import ReactHighcharts from "react-highcharts";
import { push } from "react-router-redux";
import { connect } from "react-redux";

import Highcharts from "highcharts";
var wordcloud = require('highcharts/modules/wordcloud');
var drilldown = require('highcharts/modules/drilldown');

const barChartData = {
  "Class 1": 0.710478165,
  "Class 2": 0.721256542,
  "Class 3": 0.712503599,
  "Class 4": 0.680964993,
  "Class 5": 0.696170192,
}

const barChartConfig = {
  chart: {
    type: 'column'
  },
  credits: {
        enabled: false
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
    "name": "Lorem",
    "weight": 1
  },
  {
    "name": "ipsum",
    "weight": 1
  },
  {
    "name": "dolor",
    "weight": 1
  },
  {
    "name": "sit",
    "weight": 2
  },
  {
    "name": "amet",
    "weight": 2
  },
  {
    "name": "consectetur",
    "weight": 2
  },
  {
    "name": "adipiscing",
    "weight": 1
  },
  {
    "name": "elit",
    "weight": 2
  },
  {
    "name": "Aenean",
    "weight": 1
  },
  {
    "name": "bibendum",
    "weight": 1
  },
  {
    "name": "erat",
    "weight": 3
  },
  {
    "name": "ac",
    "weight": 4
  },
  {
    "name": "justo",
    "weight": 2
  },
  {
    "name": "sollicitudin",
    "weight": 2
  },
  {
    "name": "quis",
    "weight": 1
  },
  {
    "name": "lacinia",
    "weight": 2
  },
  {
    "name": "ligula",
    "weight": 1
  },
  {
    "name": "fringilla",
    "weight": 1
  },
  {
    "name": "Pellentesque",
    "weight": 1
  },
  {
    "name": "hendrerit",
    "weight": 2
  },
  {
    "name": "nisi",
    "weight": 1
  },
  {
    "name": "vitae",
    "weight": 3
  },
  {
    "name": "posuere",
    "weight": 2
  },
  {
    "name": "condimentum",
    "weight": 2
  },
  {
    "name": "lectus",
    "weight": 1
  },
  {
    "name": "urna",
    "weight": 1
  },
  {
    "name": "accumsan",
    "weight": 2
  },
  {
    "name": "libero",
    "weight": 1
  },
  {
    "name": "rutrum",
    "weight": 1
  },
  {
    "name": "commodo",
    "weight": 1
  },
  {
    "name": "mi",
    "weight": 2
  },
  {
    "name": "lacus",
    "weight": 1
  },
  {
    "name": "pretium",
    "weight": 5
  },
  {
    "name": "Phasellus",
    "weight": 1
  },
  {
    "name": "ultrices",
    "weight": 1
  },
  {
    "name": "sed",
    "weight": 1
  },
  {
    "name": "semper",
    "weight": 1
  },
  {
    "name": "Praesent",
    "weight": 3
  },
  {
    "name": "ut",
    "weight": 3
  },
  {
    "name": "tristique",
    "weight": 2
  },
  {
    "name": "magna",
    "weight": 1
  },
  {
    "name": "Donec",
    "weight": 1
  },
  {
    "name": "nisl",
    "weight": 1
  },
  {
    "name": "tellus",
    "weight": 3
  },
  {
    "name": "sagittis",
    "weight": 1
  },
  {
    "name": "tempus",
    "weight": 1
  },
  {
    "name": "eget",
    "weight": 3
  },
  {
    "name": "Sed",
    "weight": 1
  },
  {
    "name": "ornare",
    "weight": 2
  },
  {
    "name": "gravida",
    "weight": 1
  },
  {
    "name": "Curabitur",
    "weight": 2
  },
  {
    "name": "iaculis",
    "weight": 1
  },
  {
    "name": "metus",
    "weight": 1
  },
  {
    "name": "purus",
    "weight": 2
  },
  {
    "name": "est",
    "weight": 1
  },
  {
    "name": "laoreet",
    "weight": 1
  },
  {
    "name": "Quisque",
    "weight": 1
  },
  {
    "name": "augue",
    "weight": 1
  },
  {
    "name": "eros",
    "weight": 3
  },
  {
    "name": "malesuada",
    "weight": 1
  },
  {
    "name": "facilisis",
    "weight": 2
  },
  {
    "name": "mauris",
    "weight": 1
  },
  {
    "name": "Mauris",
    "weight": 1
  },
  {
    "name": "molestie",
    "weight": 1
  },
  {
    "name": "nulla",
    "weight": 1
  },
  {
    "name": "quam",
    "weight": 1
  },
  {
    "name": "placerat",
    "weight": 1
  },
  {
    "name": "sem",
    "weight": 1
  },
  {
    "name": "in",
    "weight": 1
  },
  {
    "name": "mattis",
    "weight": 1
  },
  {
    "name": "non",
    "weight": 2
  },
  {
    "name": "odio",
    "weight": 2
  },
  {
    "name": "Nunc",
    "weight": 1
  },
  {
    "name": "aliquet",
    "weight": 1
  },
  {
    "name": "nec",
    "weight": 3
  },
  {
    "name": "auctor",
    "weight": 1
  },
  {
    "name": "congue",
    "weight": 1
  },
  {
    "name": "sapien",
    "weight": 2
  },
  {
    "name": "dictum",
    "weight": 1
  },
  {
    "name": "massa",
    "weight": 2
  },
  {
    "name": "fermentum",
    "weight": 1
  },
  {
    "name": "luctus",
    "weight": 1
  },
  {
    "name": "et",
    "weight": 2
  },
  {
    "name": "nunc",
    "weight": 1
  },
  {
    "name": "In",
    "weight": 1
  },
  {
    "name": "consequat",
    "weight": 2
  },
  {
    "name": "interdum",
    "weight": 1
  },
  {
    "name": "Ut",
    "weight": 1
  },
  {
    "name": "neque",
    "weight": 1
  },
  {
    "name": "dui",
    "weight": 1
  },
  {
    "name": "maximus",
    "weight": 1
  },
  {
    "name": "id",
    "weight": 1
  },
  {
    "name": "Nullam",
    "weight": 1
  },
  {
    "name": "vel",
    "weight": 1
  },
  {
    "name": "lorem",
    "weight": 1
  },
  {
    "name": "",
    "weight": 1
  }
];

const wcConfig = {
  series: [{
        type: 'wordcloud',
        data: wordCloudData,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Lorem Ipsum'
    },
    credits: {
        enabled: false
    },
};

// Home page component
export class Dashboard extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind <this> to the event method
    this.setSelectedClassId = this.setSelectedClassId.bind(this);
  }

  componentWillMount() {
    wordcloud(Highcharts);
    drilldown(Highcharts);
  }

  setSelectedClassId(classId) {

  }

  // render
  render() {
    const {dispatch} = this.props;
    const areaChartConfig = {
      chart: {
        type: 'area'
      },
      credits: {
            enabled: false
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
        },
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        return new Promise((resolve, reject) => {
                          dispatch({
                            type: 'SET_SELECTED_CLASS',
                            classes: {
                              class_Id: this.category
                            },
                            callbackError: (error) => {
                              console.log('failed :()');
                              reject(new SubmissionError({_error: error}));
                            },
                            callbackSuccess: () => {
                              console.log('success!');
                              dispatch(push('/class'));
                              resolve();
                            }
                          });
                        });
                    }
                }
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

    return (
      <div className="">
        <div className="chart-container">
          <ReactHighcharts config={areaChartConfig}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={barChartConfig}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={wcConfig}/>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state, own_props) {
  const classes = state.classes;
  return {
    classes: classes
  };
}

export default connect(mapStateToProps)(Dashboard);
