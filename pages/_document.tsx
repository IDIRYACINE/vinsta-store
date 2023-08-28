import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <title>Vinstaverse</title>

      <meta property="og:title" content="Vinstaverse" key="title" />

      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}