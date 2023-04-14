import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return( 
    <ThemeProvider attribute="class">
      <Head>
        <title>강영규 포트폴리오</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
