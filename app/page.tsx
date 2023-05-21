'use client';

import React, { Dispatch, SetStateAction } from 'react';
import '../styles/index.scss';
import Header from '../components/Header/Header'
import Converter from '../components/Converter/Converter';
import type {TCurrency} from '../types'

export const CurrencyContext = React.createContext<{currency: TCurrency, setCurrency: Dispatch<SetStateAction<TCurrency>>}>(null!)

const App = () => {

  const [currency, setCurrency] = React.useState<TCurrency>('usd')

  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <div className="App">
        <Header/>
        <Converter currency={currency}/>
      </div>
    </CurrencyContext.Provider>
  );
}

export default App;
