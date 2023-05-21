import React from 'react'
import '../styles/app.scss'
import type { AppProps } from "next/app";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <Component {...pageProps}/>
  )
}

export default CustomApp