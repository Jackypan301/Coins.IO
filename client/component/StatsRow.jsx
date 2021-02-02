import React from 'react'
import styles from './styles/StatsRow.css'
import StockChart from './miniStock.svg'
import { db } from './firebase.js'
function StatsRow(props) {

    const percentage = ((props.price - props.openPrice)/props.openPrice)*100;


    const buyStock = () => {

        db.collection('myStocks')
        .where('ticker', '==', props.name)
        .get()
        .then((querySnapshot)=>{

          if (!querySnapshot.empty) {
            querySnapshot.forEach(function(doc) {
              db.collection('myStocks')
              .doc(doc.id)
              .update({
                  shares: doc.data().shares+=1
              })
            })

          } else {
            db.collection('myStocks')
            .add({
              ticker: props.name,
              shares: 1
            })

          }
        })
    }

  return (
    <div className={styles.row} onClick={()=>{buyStock()}}>
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