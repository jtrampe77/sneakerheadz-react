import React from 'react'
import {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv, AppBarImg} from './styles'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function AppBar(props) {


  return (
    <AppBarStyles>
        <AppBarItems>

            <AppBarItem>
             
                <AppBarImg src={logo} alt="Logo"/>
             
            </AppBarItem>

              <AppBarDiv>
                
                <AppBarItem>
                <Link to="/notifications"><IoIosNotificationsOutline color='white' size="2rem"/></Link>
                </AppBarItem>

                <AppBarItem>
                  <Link to="/account"><BsPersonCircle color='white' size="2rem"/></Link>
                </AppBarItem>

                <AppBarItem>
                  <Link to="/account"><AiOutlineMail color='white' size="2rem"/></Link>
                </AppBarItem>

                <AppBarItem>
                <Link to="/settings"><FiSettings color='white' size="2rem"/></Link>
                </AppBarItem>

              </AppBarDiv>
            
        </AppBarItems>
    </AppBarStyles>
  )
}

export default AppBar