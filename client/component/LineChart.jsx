import React from 'react'
import Plot from 'react-plotly.js';
import {Line} from 'react-chartjs-2'
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates,
      prices: this.props.prices
    };
  }



render() {
  return (
    <div>

      <Plot
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
      />
    </div>
  )
      }
}

export default LineChart