import React from 'react'
import styles from './styles/StatsRow.css'
import StockChart from './miniStock.svg'
import {db } from './firebase.js'
function StatsRow(props) {

    const percentage = ((props.price - props.openPrice)/props.openPrice)*100;


    const buyStock = () => {

    }

  return (
    <div className={styles.row} onClick={buyStock()}>
        <div className={styles.intro}>
          <h1>{props.name}</h1>
          <p>{props.shares &&
            (props.shares + " shares")
          }</p>
        </div>
        <div className={styles.chart}>
          <img src={StockChart} height={16} />
        </div>
        <div className={styles.numbers}>
          <p className={styles.price}>{props.price}</p>
          <p className={styles.percentage}> +{Number(percentage).toFixed(2)}% </p>
        </div>
    </div>
  )
}

export default StatsRow