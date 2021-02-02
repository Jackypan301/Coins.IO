import React from 'react'
import styles from './styles/Chip.css'

const Chip = function(props) {
  return (
    <div className={styles.chip}>
      <div className={styles.avatar}>
        <img src={props.image} width={10} height={10}/>
      </div>
      <div className={styles.label}>
        <span>{props.label}</span>
      </div>
    </div>
  )
}

export default Chip