import React from 'react'
import {Panels} from './../panels'
import {SideBar} from './../sidebar'
import {StoreFrontStyles, StoreFrontPanels, StoreFrontSideBar} from '../storefront/styles'

function StoreFront() {
  return (
      <StoreFrontStyles>

        <StoreFrontSideBar>
          <SideBar />
        </StoreFrontSideBar>
     

         <StoreFrontPanels>
          <Panels />
        </StoreFrontPanels>

      </StoreFrontStyles>
     
   
  )
}

export default StoreFront