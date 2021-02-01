import React from 'react'
import styles from './styles/StatsRow.css'


function StatsRow() {
  return (
    <div className={styles.row}>
        <div className={styles.intro}>
          <h1>{props?.name}</h1>
          <p>{props.volume &&
            (props.volume + " shares")
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