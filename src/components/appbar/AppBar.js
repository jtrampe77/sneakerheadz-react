import React from 'react'
import {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv, AppBarImg} from './styles'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function AppBar(props) {


  return (
    <AppBarStyles>
        <AppBarItems>

            <AppBarItem>
              <Link to="/">
                <AppBarImg src={logo} alt="Logo"/>
              </Link>
            </AppBarItem>

              <AppBarDiv>
                
                <AppBarItem>
                    <IoIosNotificationsOutline color='white' size="2rem"/>
                </AppBarItem>

                <AppBarItem>
                  <Link to="/login"><BsPersonCircle color='white' size="2rem"/></Link>
                </AppBarItem>

                <AppBarItem>
                  <FiSettings color='white' size="2rem"/>
                </AppBarItem>

              </AppBarDiv>
            
        </AppBarItems>
    </AppBarStyles>
  )
}

export default AppBar