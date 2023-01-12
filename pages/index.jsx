import Head from 'next/head'
import Header from '../components/Pages/Header/Header'
import Home from '../components/Pages/Home/Home'
import Content from '../components/Pages/Content/Content'
import About from '../components/Pages/About/About'
import Footer from '../components/Pages/Footer/Footer'
import InputContextProvider from '../context/InputContext'

export default function Index() {
  return (
    <>
    <InputContextProvider>
      <Head>
        <title>Semana do Inglês</title>
        <meta name="description" content="Descrição da página"/>
        <meta name="keywords" content="Tags, Tags, Tags"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Header/>
      </header>
      <main>
        <Home />
        <Content/>
        <About />
      </main>
      <footer>
        <Footer/>
      </footer>
    </InputContextProvider>

    </>
  )
}
