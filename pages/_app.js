import '../styles/globals.sass'
import { Inter } from '@next/font/google'

const inter = Inter({
    weight: ['400', '500','600','700','800','900'],
    subsets: ['latin'],
  })

export default function App({ Component, pageProps }) {
  return (
        <Component className={inter.className} {...pageProps} />
  )
}
