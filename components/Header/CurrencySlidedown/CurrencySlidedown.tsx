import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import styles from './CurrencySlidedown.module.scss'
import type {TCurrency} from '../../../types'
import {currencies} from '../../../initialData'


const CurrencySlidedown: React.FC<{currency: TCurrency, setCurrency : React.Dispatch<SetStateAction<TCurrency>>}> = ({currency, setCurrency}) => {

  const menu = Object.keys(currencies) as TCurrency[]

  return (
    <div className={styles.slide_container}>
      <label htmlFor='currency-slide' className={styles.label}>
      <input id='currency-slide' type="checkbox" />
      <p>
        <Image src={currencies[`${currency}`]} alt='' width={16} height={16} />
        <span>{currency.toUpperCase()}</span>
      </p>
      <Image className={styles.toggle} src='/img/arrow_down.png' alt='' width={20} height={20} />
      <div className={styles.content}>
      {
        menu.map((el) =>
          <p key={el} onClick={() => setCurrency(el)}>
            <Image src={currencies[`${el}`]} alt='' width={16} height={16} />
            <span>
              {el.toUpperCase()}
            </span>
          </p>
          )
        }
      </div>
      </label>
    </div>
  )
}

export default CurrencySlidedown