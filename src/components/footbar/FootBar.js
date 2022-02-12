import React from 'react'
import { FootBarStyles, FootBarImg } from './styles'
import logo from '../../img/logo.png'

function FootBar() {
  return (
    <FootBarStyles>
      <FootBarImg src={logo} alt="Logo"/>
      Copyrights 2022
    </FootBarStyles>
  )
}

export default FootBar