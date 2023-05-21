import React from 'react'
import styles from './LoginButton.module.scss'

const LoginButton = () => {
  return (
    <button className={styles.btn}>
      <span>Log In</span>
    </button>
  )
}

export default LoginButton