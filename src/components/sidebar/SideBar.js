import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem,SideBarItemName} from '../sidebar/styles'
import{AiOutlineHome} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from 'libs/firebase/firebaseConfig'

function SideBar() {

  function onLogoutRequest(e){
      signOut(auth)

  }

  return (
    <SideBarStyles>

      <SideBarItems>

        <Link to="/dashboard">
          <SideBarItem>
            <AiOutlineHome size="1.5rem"/>
            <SideBarItemName>Home</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>
        </Link>

        <SideBarItem>
          <MdManageAccounts size="1.5rem"/>
          <SideBarItemName>Account</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        <Link to="/about">
          <SideBarItem>
            <BiInfoCircle size="1.5rem"/>
            <SideBarItemName>About</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>
        </Link>

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