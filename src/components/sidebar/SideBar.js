import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem,SideBarItemName} from '../sidebar/styles'
import{AiOutlineHome} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function SideBar() {
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

        <Link to="/">
          <SideBarItem>
            <FiLogOut size="1.5rem"/>
            <SideBarItemName>Logout</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>
        </Link>


      </SideBarItems>

    </SideBarStyles>
  )
}

export default SideBar