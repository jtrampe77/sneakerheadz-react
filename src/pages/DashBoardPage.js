import React from 'react'
import {AppBar} from './../components/appbar'
import {StoreFront} from './../components/storefront'
import {FootBar} from './../components/footbar'

function DashBoardPage(props) {
  return (
    <>
      <AppBar />
      <StoreFront />
      <FootBar />
    </>
     
  )
}

export default DashBoardPage