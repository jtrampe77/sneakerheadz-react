import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem,SideBarItemName, SideBarHeader} from '../sidebar/styles'
import {MdManageAccounts} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {signOut} from 'firebase/auth'
import {auth} from 'libs/firebase/firebaseConfig'
import ProductOptions from './ProductOptions';
import {MdDashboard} from 'react-icons/md'

function SideBar() {

  function onLogoutRequest(e){
      signOut(auth)

  }

  return (
    <SideBarStyles>

      <SideBarHeader>
        <MdDashboard size="1.75rem" color='red' />
        <h2>Dashboard</h2>
      </SideBarHeader>

      <SideBarItems>

        <ProductOptions />

      
        <SideBarItem>
          <MdManageAccounts size="1.5rem"/>
          <SideBarItemName>Account</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

          <SideBarItem>
            <BiInfoCircle size="1.5rem"/>
            <SideBarItemName>About</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>
    
        <SideBarItem>
          <BsFillTelephoneFill size="1.5rem"/>
          <SideBarItemName>Contact</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

     
          <SideBarItem onClick={onLogoutRequest}>
            <FiLogOut size="1.5rem"/>
            <SideBarItemName>Logout</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>
 


      </SideBarItems>

    </SideBarStyles>
  )
}

export default SideBar