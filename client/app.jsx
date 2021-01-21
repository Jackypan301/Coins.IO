import Chart from 'chart.js';
import React, { useEffect, useState } from 'react';


function App() {
  const [prices, setPrices] = useState([]);
  const [dates, setDates] = useState([]);


  const getStock = async ticker => {
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
    return data;
  };

  const getMultipleStocks = async tickersArray =>{
    const request = await fetch(`http://localhost:8080/stocks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        tickers: tickersArray,
        type: "daily"
      })
    });

    const data = await request.json();
    console.log(data);
    return data;
  }

  const getUnlimitedStocks = async tickersArray =>{
    const request = await fetch(`http://localhost:8080/stocks-unlimited`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        tickers: tickersArray,
        type: "daily"
      })
    });

    const data = await request.json();
    console.log(data);
    return data;
  }


  useEffect(async () => {
    try {
     let stock = getStock();
     stock("AAPL", 'daily');
      let priceArray = [];
      let dateArray = [];
      console.log(stock)
      for (let keys in response.data.bpi) {
        dateArray.push(keys);
        priceArray.push(response.data.bpi[keys]);
      }
      setPrices(priceArray);
      setDates(dateArray);
      console.log(dates, prices);
    } catch(err) {
      console.log(err);
    }
  }, []);

  // var ctx = document.getElementById('myChart');
  // var chart = new Chart(ctx, {
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
  return (
    <div>
      <h2>Hey!</h2>
      <button onClick={() => getStock("AAPL", 'daily')}>Get stock</button>
      <button onClick={() => getMultipleStocks(['AAPL', 'MSFT', 'TQQQ'], 'daily')}>Get multiple stocks</button>
      <button onClick={() => getUnlimitedStocks(['AAPL', 'MSFT', 'TQQQ', 'TLT', 'DIA', 'SPY', ],'daily')}>Get unlimited stocks in 12 seconds X #of Stocks</button>
    </div>
  );
}
export default App;