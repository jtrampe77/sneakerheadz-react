import React from 'react'
import {StoreFront} from './../../components/storefront'
import {HeroBanner} from '../../components/herobanner'
import {AppBar} from '../../components/appbar'
import {FootBar} from '../../components/footbar'


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