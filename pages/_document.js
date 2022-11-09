import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>

      <Head>
        <meta name="description" content="ByuBook - modern, fast and perfect place for searching and byuing books of different themes and on all languages." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}