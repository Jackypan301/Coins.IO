import React, {useState,useEffect} from 'react'
import styles from './styles/Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow.jsx'
import { db } from './firebase.js'

function Stats() {

  const [stockData, setStockData] = useState([])
  const [myStocks, setmyStocks] = useState([])


  const url = 'https://finnhub.io/api/v1/quote'
  const token = 'c0cr4h748v6rlbal1i60'

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
      let promises = [];
      let tempData = []
      snapshot.docs.map((doc) => {
        promises.push(getStocksData(doc.data().ticker)
        .then(res => {
          tempData.push({
          id: doc.id,
          data: doc.data(),
          info: res.data
          })
        })
        )})
      Promise.all(promises) .then (() => {
        setmyStocks(tempData);
      })
    })
  }


  const getStocksData = (stock) => {
    return axios
      .get(`${url}?symbol=${stock}&token=${token}`)
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(()=>{
    getMyStocks();
    let tempStocksData=[]
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX", "GME", "AMC"]

    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          tempStocksData.push({
            name:stock,
            ...res.data
          })
        })
      )
    })

    Promise.all(promises).then(()=>{
      console.log(tempStocksData)
      setStockData(tempStocksData)
    })


  }, [])



  return (
    <div className={styles.Stats}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>Stocks  </p>
      </div>
      <div className={styles.content}>
        <div className={styles.rows}>
{/* STOCKS WE OWN */}
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
        </div>
      </div>
      <div  className={styles.list}>
          <p>Lists</p>
      </div>
      <div className={styles.content}>
        <div className={styles.rows}>
{/* STOCKS WE CAN BUY */}
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Stats