import React, { ReactNode } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BannerFooter from '../components/BannerFooter'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <Navbar/>
      {children}
      <BannerFooter/>
      <Footer/>
    </main>
  )
}

export default layout