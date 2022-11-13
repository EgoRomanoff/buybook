import '../styles/globals.css'
// import '../styles/vars.module.scss'
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
