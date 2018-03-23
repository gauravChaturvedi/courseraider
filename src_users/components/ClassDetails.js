import React from "react";
import { connect } from "react-redux";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
var histogram = require('highcharts/modules/histogram-bellcurve');

const classesData = {
  "difficulty": [2,1,4,2,5,3,3,1,1,5,5,2,2,4,4,5,1,4,5,1,1,3,1,5,3,5,5,5,1,4,2,4,5,2,5,2,1,4,2,1,5,4,2,2,1,3,1,2,5,1],
  "interest": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5],
  "helpfulness": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5],
  "satisfaction": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5]
}

// Home page component
export class ClassDetails extends React.Component {
  componentWillMount() {
    histogram(Highcharts);
  }

  render() {
    const { classes } = this.props;
    const histogramData = {
        title: {
            text: 'Highcharts Histogram'
        },
        xAxis: [{
            title: { text: 'Data' },
            alignTicks: false
        }, {
            title: { text: 'Histogram' },
            alignTicks: false,
            opposite: true
        }],

        yAxis: [{
            title: { text: 'Data' }
        }, {
            title: { text: 'Histogram' },
            opposite: true
        }],

        series: [{
            name: 'Histogram',
            type: 'histogram',
            xAxis: 1,
            yAxis: 1,
            baseSeries: 's1',
            zIndex: -1
        }, {
            name: 'Data',
            type: 'scatter',
            data: classesData[classes.id],
            id: 's1',
            marker: {
                radius: 1.5
            }
        }]
    }

    const metric1_histogramData = JSON.parse(JSON.stringify(histogramData));
    const metric2_histogramData = JSON.parse(JSON.stringify(histogramData));
    const metric3_histogramData = JSON.parse(JSON.stringify(histogramData));
    const metric4_histogramData = JSON.parse(JSON.stringify(histogramData));

    metric1_histogramData.series[1].data = classesData["difficulty"];
    metric2_histogramData.series[1].data = classesData["interest"];
    metric3_histogramData.series[1].data = classesData["helpfulness"];
    metric4_histogramData.series[1].data = classesData["satisfaction"];

    return (
      <div className="page-home">
        <div className="chart-container">
          <ReactHighcharts config={metric1_histogramData}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={metric2_histogramData}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={metric3_histogramData}/>
        </div>
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={metric4_histogramData}/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    classes: state.classes
  };
}
export default connect(mapStateToProps)(ClassDetails);
