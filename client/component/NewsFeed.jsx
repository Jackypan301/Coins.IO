import React from 'react'
import styles from './styles/NewsFeed.css'
import LineChart from './LineChart.jsx'

function NewsFeed({dates, prices, stock}) {
  return (
    <div className={styles.NewsFeed}>
      <div className={styles.container}>
        <div className={styles.chart}>
          <div className={styles.portfolio}>
            <h1>$118,024</h1>
            <p>+$65.23 (+0.08%) Today</p>
          </div>
          <div className={styles.graph}>
            <LineChart dates={dates} prices={prices}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed