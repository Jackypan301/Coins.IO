import React from 'react'
import styles from './styles/TimeLine.css'

function TimeLine() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonscontainer}>
        <div className={styles.button}>Live</div>
        <div className={styles.button}>ID</div>
        <div className={styles.buttonactive}>1W</div>
        <div className={styles.button}>3M</div>
        <div className={styles.button}>1Y</div>
        <div className={styles.button}>All</div>
      </div>
    </div>
  )
}

export default TimeLine