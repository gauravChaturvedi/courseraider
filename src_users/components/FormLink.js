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
      QRCode: null
    };
  }

  componentWillMount() {
    const bitlyLink = localStorage.getItem('bitlyLink');
    console.log(bitlyLink);
    axios.get('http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/qrcode?url=bit.ly/2KA2em3')
      .then(res => {
        // console.log(res.data);
        this.setState({
          QRCode: res.data
        });
      })
  }

  // render
  render() {
    const bitlyLink = localStorage.getItem('bitlyLink');


    return (
      <div className="">
        <div className="">
          QR CODE
          <img src={'http://ec2-52-70-176-147.compute-1.amazonaws.com:5000/api/v1/questions/qrcode?url=' + bitlyLink} />
        </div>
        <div className="">
          { bitlyLink }
        </div>
      </div>
    );
  }

}

export default connect()(Dashboard);
