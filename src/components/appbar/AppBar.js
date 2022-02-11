import React from 'react'
import {AppBarStyles, AppBarItems, AppBarItem, AppBarDiv} from './styles'
import {IconButton} from './../../ui/buttons'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsPersonCircle} from 'react-icons/bs'

function AppBar(props) {
  return (
    <AppBarStyles>
        <AppBarItems>

            <AppBarItem>SneakerHeadz</AppBarItem>

              <AppBarDiv>
                
                <AppBarItem>
                    <IconButton><IoIosNotificationsOutline color='red' size="2rem"/></IconButton> 
                </AppBarItem>

                <AppBarItem>
                  <IconButton><BsPersonCircle color='red' size="2rem"/></IconButton>
                </AppBarItem>
              </AppBarDiv>
            
        </AppBarItems>
    </AppBarStyles>
  )
}

export default AppBar