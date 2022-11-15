import '../styles/globals.css'
import '../styles/customTheme.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import Head from 'next/head'
import { ThemeProvider } from 'react-bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BuyBook</title>
      </Head>
      <ThemeProvider
        breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  )
}

export default MyApp
