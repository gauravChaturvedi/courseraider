import React from "react";
import axios from 'axios';
import ReactHighcharts from "react-highcharts";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import BarHistoChart from './BarHistoChart';

// Dashboard component
export class Dashboard extends React.Component {

  // render
  render() {
    const bitlyLink = localStorage.getItem('bitlyLink');

    return (
      <div className="form-link-container">
        <div className="qr-code-container">
          <h3>QR CODE</h3>
          <img src={'http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/qrcode?url=' + bitlyLink} />
        </div>
        <div className="bitly-link-container">
          <h3>{ bitlyLink }</h3>
        </div>
      </div>
    );
  }

}

export default connect()(Dashboard);
