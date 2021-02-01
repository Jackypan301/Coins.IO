import React, {useState,useEffect} from 'react'
import styles from './styles/Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow.jsx'

function Stats() {

  const [stockData, setStockData] = useState([])
  const url = 'https://finnhub.io/api/v1/quote'
  const token = 'c0c49en48v6u6kubal60'


  const getStocksData = (stock) => {
    return axios
      .get(`${url}?symbol=${stock}&token=${token}`)
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(()=>{
    let tempStocksData=[]
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"]

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

    Promis.all(promises).then(()=>{
      console.loog(tempStocksData)
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
        </div>
      </div>
      <div className={styles.header}>
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