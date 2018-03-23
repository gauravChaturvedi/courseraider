import React from "react";
import { connect } from "react-redux";
import ReactHighcharts from "react-highcharts";
import Highcharts from "highcharts";
var histogram = require('highcharts/modules/histogram-bellcurve');
var wordcloud = require('highcharts/modules/wordcloud');

const classesData = {
  "Class 1": {
    "difficulty": [2,1,4,2,5,3,3,1,1,5,5,2,2,4,4,5,1,4,5,1,1,3,1,5,3,5,5,5,1,4,2,4,5,2,5,2,1,4,2,1,5,4,2,2,1,3,1,2,5,1],
    "interest": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5],
    "helpfulness": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5],
    "satisfaction": [2,2,5,3,5,4,4,3,2,5,1,3,2,2,1,4,1,1,5,3,2,1,2,2,3,1,5,2,4,3,3,3,3,4,5,5,4,3,4,1,4,1,5,3,4,1,4,5,4,5]
  },
  "Class 2": {
    "difficulty": [4,2,2,3,3,1,4,5,3,2,1,1,1,2,3,5,1,2,3,5,5,2,5,1,5,5,5,5,1,4,3,5,1,3,2,3,4,3,5,4,3,4,4,1,4,2,1,5,5,2],
    "interest": [3,2,3,5,5,1,3,5,2,1,4,1,5,5,4,5,1,4,3,3,2,2,4,1,5,1,5,5,4,4,4,5,3,4,5,5,5,3,1,2,5,4,5,3,4,3,5,1,5,5],
    "helpfulness": [2,4,5,1,1,3,3,1,4,2,5,1,1,4,1,2,3,4,1,3,3,2,2,5,1,1,2,4,2,1,3,5,3,4,4,2,3,1,2,5,3,1,3,3,3,3,3,3,4,2],
    "satisfaction": [2,3,1,4,1,1,4,1,4,2,4,5,2,3,1,3,4,1,1,2,2,4,1,3,1,1,3,3,3,5,5,1,2,1,4,1,1,5,3,3,4,3,5,3,4,4,1,4,3,1]
  },
  "Class 3": {
    "difficulty": [5,3,1,3,1,1,3,3,3,4,3,4,2,3,4,2,4,4,2,3,5,1,4,3,1,4,1,2,2,1,1,3,3,3,2,4,4,3,2,3,2,5,4,1,5,3,5,1,2,2],
    "interest": [2,5,2,3,2,4,3,5,5,3,4,2,4,2,1,3,5,5,1,3,5,5,5,5,1,4,5,5,1,1,5,2,3,4,1,5,5,5,2,1,2,3,1,4,2,5,1,2,4,5],
    "helpfulness": [3,3,5,4,3,5,1,5,5,5,1,3,2,4,3,4,3,4,3,1,4,5,2,4,1,2,1,5,5,2,1,4,5,3,1,2,5,5,3,5,1,2,5,1,3,3,2,2,3,2],
    "satisfaction": [5,4,4,1,5,3,1,3,2,4,1,2,1,1,3,3,2,3,3,1,5,5,4,4,3,3,4,1,2,2,2,2,4,4,4,4,2,4,5,5,2,2,2,4,1,4,2,2,1,3]
  },
  "Class 4": {
    "difficulty": [5,3,1,4,1,4,5,5,4,4,3,4,1,5,1,3,4,4,5,1,3,4,1,1,2,2,4,3,3,1,5,5,5,3,3,1,4,1,3,5,5,3,4,4,4,4,5,4,3,1],
    "interest": [5,1,3,1,1,5,4,4,5,4,3,3,5,4,4,1,2,3,5,4,2,2,3,2,4,4,2,1,2,5,5,5,4,1,4,3,4,2,2,4,2,1,2,3,2,1,5,3,3,3],
    "helpfulness": [4,2,4,5,5,5,4,5,1,3,1,4,1,2,3,1,2,1,5,3,3,2,4,3,4,3,2,1,2,5,2,4,2,2,3,2,4,1,1,2,3,4,4,2,3,5,5,5,1,3],
    "satisfaction": [4,4,1,3,2,2,2,2,5,2,1,3,4,5,2,5,1,5,5,1,1,1,3,1,5,3,1,4,1,2,2,2,3,1,1,5,2,1,3,1,5,1,3,5,3,1,2,2,3,5]
  },
  "Class 5": {
    "difficulty": [1,4,2,3,1,2,4,3,5,4,3,1,4,1,5,2,3,3,3,1,2,3,5,4,1,4,4,2,2,5,2,5,5,5,2,4,2,1,4,3,5,3,2,4,5,1,5,1,4,4],
    "interest": [4,1,1,2,1,3,3,3,2,2,3,3,4,5,4,2,3,3,4,1,5,2,2,5,3,3,3,5,3,3,2,1,3,1,4,1,2,3,2,2,1,4,5,4,2,5,3,5,5,1],
    "helpfulness": [4,1,1,5,3,4,2,3,3,1,1,5,5,4,3,1,1,5,4,5,1,5,4,3,2,1,4,4,3,5,3,1,2,2,4,1,1,3,1,3,2,1,4,2,1,4,4,5,3,2],
    "satisfaction": [4,2,4,2,1,4,4,4,2,5,2,1,4,4,2,1,4,1,1,2,2,1,3,3,2,1,5,2,3,2,4,2,2,5,5,1,1,2,1,1,4,5,1,5,5,1,4,1,5,3]
  }
}

// Home page component
export class ClassDetails extends React.Component {
  componentWillMount() {
    histogram(Highcharts);
    wordcloud(Highcharts);
  }

  render() {
    const { classes } = this.props;
    const histogramData = {
        title: {
            text: 'Difficulty Score'
        },
        xAxis: [{
            // title: { text: 'Data' },
            alignTicks: false
        }, {
            title: { text: 'Scores' },
            alignTicks: false,
            opposite: true
        }],

        yAxis: [{
            // title: { text: 'Data' }
        }, {
            title: { text: '# of students' },
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

    var wordCloudData = [{
   "name": "good",
   "weight": 6713
 },
 {
   "name": "place",
   "weight": 6634
 },
 {
   "name": "food",
   "weight": 6079
 },
 {
   "name": "great",
   "weight": 5068
 },
 {
   "name": "like",
   "weight": 4970
 },
 {
   "name": "one",
   "weight": 4024
 },
 {
   "name": "get",
   "weight": 3801
 },
 {
   "name": "time",
   "weight": 3452
 },
 {
   "name": "really",
   "weight": 3348
 },
 {
   "name": "service",
   "weight": 3109
 },
 {
   "name": "would",
   "weight": 3063
 },
 {
   "name": "back",
   "weight": 2863
 },
 {
   "name": "dont",
   "weight": 2603
 },
 {
   "name": "also",
   "weight": 2508
 },
 {
   "name": "love",
   "weight": 2239
 },
 {
   "name": "little",
   "weight": 2216
 },
 {
   "name": "nice",
   "weight": 2207
 },
 {
   "name": "well",
   "weight": 2173
 },
 {
   "name": "ive",
   "weight": 2110
 },
 {
   "name": "always",
   "weight": 2013
 },
 {
   "name": "even",
   "weight": 1996
 },
 {
   "name": "best",
   "weight": 1939
 },
 {
   "name": "got",
   "weight": 1828
 },
 {
   "name": "pretty",
   "weight": 1804
 },
 {
   "name": "much",
   "weight": 1749
 },
 {
   "name": "chicken",
   "weight": 1718
 },
 {
   "name": "try",
   "weight": 1709
 },
 {
   "name": "ordered",
   "weight": 1703
 },
 {
   "name": "restaurant",
   "weight": 1690
 },
 {
   "name": "menu",
   "weight": 1652
 },
 {
   "name": "didnt",
   "weight": 1646
 },
 {
   "name": "people",
   "weight": 1643
 },
 {
   "name": "first",
   "weight": 1621
 },
 {
   "name": "know",
   "weight": 1596
 },
 {
   "name": "order",
   "weight": 1574
 },
 {
   "name": "think",
   "weight": 1546
 },
 {
   "name": "could",
   "weight": 1539
 },
 {
   "name": "bar",
   "weight": 1536
 },
 {
   "name": "never",
   "weight": 1530
 },
 {
   "name": "better",
   "weight": 1529
 },
 {
   "name": "make",
   "weight": 1510
 },
 {
   "name": "went",
   "weight": 1510
 },
 {
   "name": "friendly",
   "weight": 1485
 },
 {
   "name": "staff",
   "weight": 1477
 },
 {
   "name": "way",
   "weight": 1454
 },
 {
   "name": "night",
   "weight": 1446
 },
 {
   "name": "going",
   "weight": 1418
 },
 {
   "name": "right",
   "weight": 1361
 },
 {
   "name": "pizza",
   "weight": 1338
 },
 {
   "name": "hour",
   "weight": 960
 },
 {
   "name": "another",
   "weight": 956
 },
 {
   "name": "small",
   "weight": 930
 },
 {
   "name": "side",
   "weight": 926
 },
 {
   "name": "phoenix",
   "weight": 920
 },
 {
   "name": "big",
   "weight": 919
 },
 {
   "name": "prices",
   "weight": 896
 },
 {
   "name": "wasnt",
   "weight": 895
 },
 {
   "name": "favorite",
   "weight": 881
 },
 {
   "name": "home",
   "weight": 869
 },
 {
   "name": "sandwich",
   "weight": 864
 },
 {
   "name": "youre",
   "weight": 864
 },
 {
   "name": "tasty",
   "weight": 855
 },
 {
   "name": "stars",
   "weight": 852
 },
 {
   "name": "burger",
   "weight": 849
 },
 {
   "name": "hot",
   "weight": 844
 },
 {
   "name": "drinks",
   "weight": 843
 },
 {
   "name": "feel",
   "weight": 841
 },
 {
   "name": "enough",
   "weight": 831
 },
 {
   "name": "things",
   "weight": 827
 },
 {
   "name": "drink",
   "weight": 823
 },
 {
   "name": "sweet",
   "weight": 818
 },
 {
   "name": "awesome",
   "weight": 814
 },
 {
   "name": "fries",
   "weight": 806
 },
 {
   "name": "beer",
   "weight": 798
 },
 {
   "name": "store",
   "weight": 798
 },
 {
   "name": "minutes",
   "weight": 797
 },
 {
   "name": "wine",
   "weight": 794
 },
 {
   "name": "thats",
   "weight": 793
 },
 {
   "name": "long",
   "weight": 789
 },
 {
   "name": "worth",
   "weight": 787
 },
 {
   "name": "price",
   "weight": 786
 },
 {
   "name": "need",
   "weight": 784
 },
 {
   "name": "atmosphere",
   "weight": 784
 },
 {
   "name": "looking",
   "weight": 782
 },
 {
   "name": "bread",
   "weight": 775
 },
 {
   "name": "different",
   "weight": 765
 },
 {
   "name": "coffee",
   "weight": 764
 },
 {
   "name": "friends",
   "weight": 763
 },
 {
   "name": "tried",
   "weight": 761
 },
 {
   "name": "took",
   "weight": 759
 },
 {
   "name": "work",
   "weight": 751
 },
 {
   "name": "clean",
   "weight": 738
 },
 {
   "name": "places",
   "weight": 736
 },
 {
   "name": "years",
   "weight": 732
 },
 {
   "name": "recommend",
   "weight": 725
 },
 {
   "name": "taste",
   "weight": 723
 },
 {
   "name": "selection",
   "weight": 720
 },
 {
   "name": "excellent",
   "weight": 719
 },
 {
   "name": "room",
   "weight": 718
 },
 {
   "name": "breakfast",
   "weight": 717
 },
 {
   "name": "actually",
   "weight": 716
 },
 {
   "name": "huge",
   "weight": 709
 },
 {
   "name": "nothing",
   "weight": 703
 },
 {
   "name": "found",
   "weight": 702
 },
 {
   "name": "old",
   "weight": 702
 },
 {
   "name": "asked",
   "weight": 699
 },
 {
   "name": "meat",
   "weight": 695
 },
 {
   "name": "visit",
   "weight": 690
 },
 {
   "name": "probably",
   "weight": 681
 },
 {
   "name": "kind",
   "weight": 678
 },
 {
   "name": "wanted",
   "weight": 674
 },
 {
   "name": "flavor",
   "weight": 669
 },
 {
   "name": "thought",
   "weight": 668
 },
 {
   "name": "check",
   "weight": 665
 },
 {
   "name": "special",
   "weight": 665
 },
 {
   "name": "quality",
   "weight": 660
 },
 {
   "name": "anything",
   "weight": 658
 },
 {
   "name": "ill",
   "weight": 656
 },
 {
   "name": "quite",
   "weight": 651
 },
 {
   "name": "friend",
   "weight": 648
 },
 {
   "name": "server",
   "weight": 648
 },
 {
   "name": "however",
   "weight": 647
 },
 {
   "name": "scottsdale",
   "weight": 645
 },
 {
   "name": "large",
   "weight": 638
 },
 {
   "name": "perfect",
   "weight": 638
 },
 {
   "name": "rice",
   "weight": 636
 },
 {
   "name": "sushi",
   "weight": 635
 },
 {
   "name": "maybe",
   "weight": 635
 },
 {
   "name": "cool",
   "weight": 632
 },
 {
   "name": "free",
   "weight": 628
 },
 {
   "name": "look",
   "weight": 626
 },
 {
   "name": "super",
   "weight": 622
 }
]

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

    metric1_histogramData.series[1].data = classesData[classes.id || "Class 1"]["difficulty"];
    metric2_histogramData.series[1].data = classesData[classes.id || "Class 1" ]["interest"];
    metric3_histogramData.series[1].data = classesData[classes.id || "Class 1"]["helpfulness"];
    metric4_histogramData.series[1].data = classesData[classes.id || "Class 1"]["satisfaction"];

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
        <div className="chart-container" style={{marginTop: "10%"}}>
          <ReactHighcharts config={wcConfig}/>
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
