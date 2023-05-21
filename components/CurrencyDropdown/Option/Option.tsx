import React from 'react'
import Image from 'next/image'
import styles from './Option.module.scss'
import {components, OptionProps} from 'react-select'
import type { TOption } from '../CurrencyDropDown.types'
import {currencies} from '../../../initialData'

const Option: React.FC<OptionProps<TOption>> = (props) => {

  return (
    <components.Option {...props}>
      <div className={styles.option}>
        <Image src={currencies[`${props.data.value}`]} alt='' width={16} height={16} />
        <span>
          {props.label}
        </span>
      </div>
    </components.Option>
  )
}

export default Option