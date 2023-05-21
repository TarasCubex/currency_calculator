'use client';

import React, { Dispatch, SetStateAction } from 'react';
import '../styles/index.scss';
import Header from '../components/Header/Header'
import Converter from '../components/Converter/Converter';
import type {TCurrency} from '../types'


const Page = () => {

  const [currency, setCurrency] = React.useState<TCurrency>('usd')


  return (
      <div className="App">
        <Header currency={currency} setCurrency={setCurrency} />
        <Converter currency={currency}/>
      </div>
  );
}

export default Page;
