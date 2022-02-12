import React from 'react'
import {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv, AppBarImg} from './styles'
import {IconButton} from './../../ui/buttons'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import logo from '../../img/logo.png'

function AppBar(props) {


  return (
    <AppBarStyles>
        <AppBarItems>

            <AppBarItem>
              <AppBarImg src={logo} alt="Logo"/>
            </AppBarItem>

              <AppBarDiv>
                
                <AppBarItem>
                    <IconButton><IoIosNotificationsOutline color='white' size="2rem"/></IconButton> 
                </AppBarItem>

                <AppBarItem>
                  <IconButton><BsPersonCircle color='white' size="2rem"/></IconButton>
                </AppBarItem>

                <AppBarItem>
                  <IconButton><FiSettings color='white' size="2rem"/></IconButton>
                </AppBarItem>

              </AppBarDiv>
            
        </AppBarItems>
    </AppBarStyles>
  )
}

export default AppBar