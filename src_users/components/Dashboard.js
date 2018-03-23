import React from "react";
import ReactHighcharts from "react-highcharts";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import BarHistoChart from './BarHistoChart';

import Highcharts from "highcharts";
var wordcloud = require('highcharts/modules/wordcloud');
var drilldown = require('highcharts/modules/drilldown');
var histogram = require('highcharts/modules/histogram-bellcurve');

const barChartData = {
  "Class 1": 0.710478165,
  "Class 2": 0.721256542,
  "Class 3": 0.712503599,
  "Class 4": 0.680964993,
  "Class 5": 0.696170192
}

// Home page component
export class Dashboard extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    // bind <this> to the event method
  }

  componentWillMount() {
    wordcloud(Highcharts);
    drilldown(Highcharts);
    histogram(Highcharts);
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
        text: 'Student Feedback'
      },
      subtitle: {
        text: ''
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
          text: 'Total Score'
        },
        labels: {
          formatter: function () {
            return this.value / 1000;
          }
        }
      },
      exporting: {
       buttons: {
         contextButton: {
                    enabled: false
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
        name: 'Difficulty',
        data: [2.94, 3.1, 2.8, 3.26, 3.08]
      }, {
        name: 'Interest',
        data: [3.08, 3.5, 3.26, 3.06, 2.88]
      }, {
        name: 'Helpfulness',
        data: [3.2, 2.68, 3.12, 2.96, 2.84]
      }, {
        name: 'Satisfaction',
        data: [3, 2.66, 2.88, 2.64, 2.72]
      }]
    };

    return (
      <div className="">
        <div className="chart-container">
          <ReactHighcharts config={areaChartConfig}/>
        </div>
        <BarHistoChart />
      </div>
    );
  }

}

export default connect()(Dashboard);
