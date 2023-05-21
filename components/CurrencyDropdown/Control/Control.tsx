import React from 'react'
import Image from 'next/image'
import {components, ControlProps} from 'react-select'
import type { TOption } from '../CurrencyDropDown.types'
import {currencies} from '../../../initialData'

const Control: React.FC<ControlProps<TOption,false>> = ({children,...props}) => {

  const inputValue = props.selectProps.value as TOption | null

  const value = inputValue?.value

  return (
    <components.Control {...props}>
      <Image src={value ? currencies[`${value}`] : ''} alt='' width={16} height={16} style={{marginRight: 8}} />
      {children}
    </components.Control>
  )
}

export default Control