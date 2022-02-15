import React from 'react'
import {AppBar} from './../components/appbar'
import {FootBar} from './../components/footbar'
import {HeroBanner} from './../components/herobanner'


function LoginPage(props) {
  return (
    <>
      <AppBar />
      <HeroBanner />
      <FootBar />
    </>
  )
}

export default LoginPage