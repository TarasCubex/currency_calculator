import React from 'react'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>OSRS Gold</li>
        <li>RS3 Gold</li>
        <li>Sell RS Gold</li>
        <li>OSRS Items</li>
        <li>OSRS Accounts</li>
        <li>Reward Chests</li>
      </ul>
    </nav>
  )
}

export default NavBar