import React from 'react'
import Faqs from '../../components/Faqs'

import MainHeader from '../../components/MainHeader'
import Programers from '../../components/Programers'
import Testmonia from '../../components/Testmonia'
import Values from '../../components/Values'
const Home = () => {
  return (
    <>
    <MainHeader />
    <Programers />
    <Values/>
    <Faqs/>
    <Testmonia/>
    
    </>
  )
}

export default Home