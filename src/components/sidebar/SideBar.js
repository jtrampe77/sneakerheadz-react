import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem} from '../sidebar/styles'

function SideBar() {
  return (
    <SideBarStyles>
      <SideBarItems>
        <SideBarItem>Home</SideBarItem>
        <SideBarItem>Add Sneakerz</SideBarItem>
        <SideBarItem>Account</SideBarItem>
        <SideBarItem>About</SideBarItem>
        <SideBarItem>Contact</SideBarItem>
      </SideBarItems>
    </SideBarStyles>
  )
}

export default SideBar