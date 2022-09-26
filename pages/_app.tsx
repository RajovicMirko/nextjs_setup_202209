import '../styles/globals.css'
import type { AppProps } from 'next/app'

export const APP_VERSION: number = 'v1.0.0'

function MyApp({ Component, pageProps }: AppProps) {
  // const test = ''
  console.log()

  return <Component {...pageProps} />
}

export default MyApp
