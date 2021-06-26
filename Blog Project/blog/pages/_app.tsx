import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import store from '../store'
import Notification from '../components/ui/notification'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>My blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
