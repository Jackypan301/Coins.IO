import React from 'react'
import styles from './styles/NewsFeed.css'
import LineChart from './LineChart.jsx'
import TimeLine from './TimeLine.jsx'
import Chip from './Chip.jsx'




function NewsFeed({dates, prices, stock}) {

  const popularTopics = ['Technology', 'Top Movies', 'Upcoming Earnings', 'Crypto', 'Cannabis', 'Healthcare Supplies', 'Index ETFs', 'Technology', 'China', 'Pharma']

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
            <TimeLine />
          </div>
        </div>
        <div className={styles.buyingpower}>
            <h2> Buying Power</h2>
            <h2> $512.78</h2>
        </div>
        <div className={styles.market}>
          <div className={styles.marketbox}>
            <p> Markets Closed </p>
            <h1>Thanks for looking at the Market</h1>
            </div>
        </div>
          <div className={styles.popularlist}>
            <div className={styles.popularlistintro}>
              <h1>Popular lists</h1>
              <p>Show More</p>
            </div>
            <div className={styles.popularlistbadges}>
             {popularTopics.map((topic) => (
               <Chip
               label={topic}
               image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
               />
             ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewsFeed