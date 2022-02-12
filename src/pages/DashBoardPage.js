import React from 'react'
import {AppBar} from './../components/appbar'
import {StoreFront} from './../components/storefront'
import {FootBar} from './../components/footbar'
import {HeroBanner} from './../components/herobanner'


function DashBoardPage(props) {


  
  return (
    <>
      <AppBar />
      <HeroBanner />
      <StoreFront />
      <FootBar />
    </>
     
  )
}

export default DashBoardPage