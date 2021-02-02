import Chart from 'chart.js';
import React, { useEffect, useState } from 'react';
import LineChart from './component/LineChart.jsx'
import SearchBar from './component/SearchBar.jsx'
import axios from 'axios'
import TopNewsList from './component/TopNewsList.jsx'
import styles from './StyleApp.css'
import Header from './component/Header.jsx'
import NewsFeed from './component/NewsFeed.jsx'
import Stats from './component/Stats.jsx'
// function App() {
//   const [prices, setPrices] = useState([1,2,3]);
//   const [dates, setDates] = useState([0,1,2]);


//   const getStock = async ticker => {
//     console.log("Getting data");
//     const request = await fetch(`/stock`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         ticker: ticker,
//         type: "daily"
//       })
//     });

//     const data = await request.json();
//     console.log(data);
//     return data;
//   };

//   const getMultipleStocks = async tickersArray =>{
//     const request = await fetch(`/stocks`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         tickers: tickersArray,
//         type: "daily"
//       })
//     });

//     const data = await request.json();
//     console.log(data);
//     return data;
//   }

//   const getUnlimitedStocks = async tickersArray =>{
//     const request = await fetch(`http://localhost:8080/stocks-unlimited`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         tickers: tickersArray,
//         type: "daily"
//       })
//     });

//     const data = await request.json();
//     console.log(data);
//     return data;
//   }




//   useEffect(async () => {
//     try {
//      let stock = await getStock("AAPL", 'daily');
//       let priceArray = [];
//       let dateArray = [];
//       let data = stock.data[`Time Series (Daily)`]
//       console.log(data)
//       for (let keys in data) {
//         dateArray.push(keys);
//         priceArray.push(data[keys]['1. open']);
//         setPrices(priceArray);
//          setDates(dateArray);
//       }

//     } catch(err) {
//       console.log(err);
//     }
//   }, []);


//   var ctx = document.getElementById('chart');
//   var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: dates,
//         datasets: [{
//             label: 'Bitcoin Prices',
//             borderColor: 'rgb(255, 99, 132)',
//             data: prices,
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });


//   return (

//     <div>
//       <h2>Hey!</h2>
//       <button onClick={() => getStock("AAPL", 'daily')}>Get stock</button>
//       <button onClick={() => getMultipleStocks(['AAPL', 'MSFT', 'TQQQ'], 'daily')}>Get multiple stocks</button>
//       <button onClick={() => getUnlimitedStocks(['AAPL', 'MSFT', 'TQQQ', 'TLT', 'DIA', 'SPY', ],'daily')}>Get unlimited stocks in 12 seconds X #of Stocks</button>
//     </div>
//   );
// }
// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prices:[],
      dates:[],
      ticker:'',
      news:[],
      stock:[]
    }

    this.getStock = this.getStock.bind(this);
    this.getNews = this.getNews.bind(this);
  }


  componentDidMount(){
    this.getStock("AAPL", 'daily')
    this.getNews()
  }


  async getStock (ticker) {
    console.log("Getting data");
    const request = await fetch(`/stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        ticker: ticker,
        type: "daily"
      })
    });

    const data = await request.json();
    console.log(data);
      let priceArray = [];
      let dateArray = [];
      let NewData = data.data[`Time Series (Daily)`]
      for (let keys in NewData) {
        dateArray.push(keys);
        priceArray.push(NewData[keys]['1. open']);
      }
      var stock = []
      for (var i = 0; i < dateArray.length; i++) {
        var entry={};
        entry.x = dateArray[i];
        entry.y = priceArray[i];
        stock.push(entry);
      }

      const pointerToThis = this;
      pointerToThis.setState({prices:priceArray,
        dates:dateArray, ticker:ticker, stock:stock});


  };

  async getNews (ticker) {
    axios.get('/news')
    .then((response)=>{console.log(response.data.articles)
      const pointerToThis = this;
      pointerToThis.setState({news:response.data.articles});
    })
    .catch((error)=>{console.log(error)})

  };




  render () {
    return(
      <div className={styles.background}>
        <div className={styles.header}>
          <Header search={this.getStock} />
        </div>

        <div className={styles.body}>
          <div className={styles.container}>
            <NewsFeed dates={this.state.dates} prices={this.state.prices} ticker={this.state.ticker} stock={this.state.stock}/>
            {/* stats */}
            <Stats />
          </div>
        </div>
        {/* <LineChart dates={this.state.dates} prices={this.state.prices} ticker={this.state.ticker} stock={this.state.stock} /> */}

        {/* <TopNewsList news={this.state.news}/> */}
      </div>
    )
  }
}

export default App;