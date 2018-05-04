import React from "react";
import axios from 'axios';
import ReactHighcharts from "react-highcharts";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import BarHistoChart from './BarHistoChart';

// Dashboard component
export class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    // default ui local state
    this.state = {
      chartsData: []
    };
  }

  componentDidMount() {
    axios.get('http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/performance/all')
      .then(res => {
        const chartsData = res.data.classes;

          this.props.dispatch({
            type: 'SET_PERFORMANCE_DATA',
            classes: {
              data: chartsData
            },
            callbackError: (error) => {
              reject(new SubmissionError({_error: error}));
            },
            callbackSuccess: () => {
              // console.log('saved in store!!');
            }
          });

        this.setState({ chartsData });
      })
  }

  // render
  render() {
    let seriesData = {
      'Difficulty': [],
      'Interest': [],
      'Helpfulness': [],
      'Satisfaction': []
    };

    let barChartData = null;

    let xAxisData = [];

    if (this.state.chartsData.length > 0) {
        barChartData = {};
        this.state.chartsData.map((x) => {
          xAxisData.push('Class ' + x.class_id);
          const class_id = 'Class ' + x.class_id;
          barChartData[class_id] = {
            avg: x.question6 && x.question6.avg,
            distribution: x.question6 && Object.keys(x.question6.dist).map(function(k) { return x.question6.dist[k] })
          };
          seriesData['Difficulty'].push(x.question1 && x.question1.avg);
          seriesData['Interest'].push(x.question2 && x.question2.avg);
          seriesData['Helpfulness'].push(x.question3 && x.question3.avg);
          seriesData['Satisfaction'].push(x.question4 && x.question4.avg);
        });
    }

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
        categories: xAxisData || ['Class', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        categories: [0, 1, 2, 3, 4, 5],
        title: {
          text: 'Average Score'
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
                              reject(new SubmissionError({_error: error}));
                            },
                            callbackSuccess: () => {
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
        data: seriesData['Difficulty'] || [3.92, 4.16, 3.88, 2.92, 2.14]
      }, {
        name: 'Interest',
        data: seriesData['Interest'] || [3.8, 3.96, 3.92, 2.94, 1.98]
      }, {
        name: 'Helpfulness',
        data: seriesData['Helpfulness'] || [4.1, 4, 3.12, 2.92, 1.98]
      }, {
        name: 'Satisfaction',
        data: seriesData['Satisfaction'] || [3.96, 4.02, 3.92, 2.9, 1.94]
      }]
    };

    return (
      <div className="">
        <div className="chart-container">
          <ReactHighcharts config={areaChartConfig}/>
        </div>
        <BarHistoChart charData={barChartData} />
      </div>
    );
  }

}

export default connect()(Dashboard);
