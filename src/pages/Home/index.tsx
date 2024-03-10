import { FC } from 'react'

import Footer from '@@/web/Footer'
import Header from '@@/web/Header'

import Customizer from './Customizer'

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="p-home">
        <Customizer />
        <iframe className="p-home-iframe" src="/rainbow" />
      </div>
      <Footer />
    </>
  )
}

export default Home
