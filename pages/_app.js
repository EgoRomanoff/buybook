import '../styles/globals.css'
import '../styles/customTheme.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BuyBook</title>
      </Head>
      <Component { ...pageProps } />
    </>
  )
}

export default MyApp
