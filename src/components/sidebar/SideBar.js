import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem,SideBarItemName} from '../sidebar/styles'
import{AiOutlineHome} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'

function SideBar() {
  return (
    <SideBarStyles>

      <SideBarItems>

        <SideBarItem>
          <AiOutlineHome size="1.5rem"/>
          <SideBarItemName>Home</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

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


      </SideBarItems>

    </SideBarStyles>
  )
}

export default SideBar