import React from 'react'
import SearchBar from './SearchBar.jsx'
import styles from './styles/Header.css'
import logo from '../../logo.png'

const Header = function({search}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} width={50} className={styles.imgLogo}/>
      </div>
      <SearchBar search={search} className={styles.searchContainer} />
      <div className={styles.menuItems}>
        <a href="#"  >Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>

    </div>
  )
}

export default Header