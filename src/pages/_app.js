import Head from 'next/head'
import { Normalize } from '../styles/Normalize'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CountryApp</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Normalize/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
