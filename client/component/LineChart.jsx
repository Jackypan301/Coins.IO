import React from 'react'
import Plot from 'react-plotly.js';
import {Line} from 'react-chartjs-2'
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [1,2,3,4],
      prices: [3,4,5,6],
      data: this.props.data,
      ticker: ''
      // data: [{x:'2021-1-20', y:8},{x:'2021-01-30', y:12},{x:'2021-02-01', y:5},{x:'2021-02-24', y:1}]
    };
    this.getdata = this.getdata.bind(this);
    this.newdata = this.newdata.bind(this);
  }

 getdata() {
  setTimeout(() => {
    var data = []
  for (var i = 0; i < this.props.dates.length; i++) {
    var entry={};
    entry.x = this.props.dates[i];
    entry.y = this.props.prices[i];
    data.push(entry);
  }
  this.setState({data: data})
  }, 2000)

}

newdata(name) {
  this.setState({ticker: name});
}

componentDidMount() {
  this.getdata();
}




render() {
  return (
    <div className>
      <Line
        data={{
          datasets:[
            {
              type: 'line',
              data: this.state.data,
              backgroundColor: 'black',
              borderColor: "#5AC53B",
              borderWidth:2,
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              pointHoverBorderColor: 'black',
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderWidth: 4,
              pointHoverBorderRadius: 6,
            }
          ],

        }}
        options={{
          legend: {
            display:false
          },
          tooltips:{
            mode: "index",
            intersect: false
          },
          scales:{
            xAxes: [{
              type: 'time',
              time: {
                  displayFormats: {
                    week:	'll'
                  }
              },
              ticks: {
                display: false,
              }
          }],
            yAxes:[{
              ticks:{
                display:false,
              }
            }]
          }
        }}

      />
      {/* <Plot
        data={[
          {
            x: this.props.dates,
            y: this.props.prices,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },
        ]}
        layout={ {width: 720, height: 540, title: `${this.props.ticker} Daily Growth`} }
      /> */}
    </div>
  )
      }
}

export default LineChart