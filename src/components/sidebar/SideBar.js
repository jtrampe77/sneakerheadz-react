import React from 'react';
import {SideBarStyles,SideBarItems,SideBarItem,SideBarItemName, SideBarGroup} from '../sidebar/styles'


import {signOut} from 'firebase/auth'
import {auth} from 'libs/firebase/firebaseConfig'
import ProductOptions from './ProductOptions';


import {MdManageAccounts} from 'react-icons/md'
import {BiInfoCircle} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {AiFillDropboxCircle} from 'react-icons/ai'
import {GiClothes} from 'react-icons/gi'
import {ImPriceTags} from 'react-icons/im'
import {BiCategoryAlt} from 'react-icons/bi'
import {BsNewspaper} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {MdOutlineLocalShipping} from 'react-icons/md'
import{HiUserGroup} from 'react-icons/hi'
import {GiHandBag} from 'react-icons/gi'



function SideBar() {

  function onLogoutRequest(e){
      signOut(auth)

  }

  return (
    <SideBarStyles>

      <SideBarItems>

      <SideBarGroup>

        <ProductOptions />

        </SideBarGroup>

        <SideBarGroup>
          <SideBarItem>
            <GiClothes size="1.5rem"/>
            <SideBarItemName>Apparel</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>

          <SideBarItem>
            <GiHandBag size="1.5rem"/>
            <SideBarItemName>Accesories</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>

          <SideBarItem>
            <ImPriceTags size="1.5rem"/>
            <SideBarItemName>Brands</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>


          <SideBarItem>
            <BiCategoryAlt size="1.5rem"/>
            <SideBarItemName>Category</SideBarItemName>
            <IoIosArrowForward />
          </SideBarItem>

          


       
        </SideBarGroup>


      <SideBarGroup>

        <SideBarItem>
          <BiInfoCircle size="1.5rem"/>
          <SideBarItemName>About</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        
        <SideBarItem>
          <BsNewspaper size="1.5rem"/>
          <SideBarItemName>Updates</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        <SideBarItem>
          <AiFillStar size="1.5rem"/>
          <SideBarItemName>Reviews</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        <SideBarItem>
          <MdOutlineLocalShipping size="1.5rem"/>
          <SideBarItemName>Shipping</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

      </SideBarGroup>

      <SideBarGroup>
        <SideBarItem>
          <MdManageAccounts size="1.5rem"/>
          <SideBarItemName>Account</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        <SideBarItem>
          <HiUserGroup size="1.5rem"/>
          <SideBarItemName>Group</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>


        <SideBarItem>
          <AiFillDropboxCircle size="1.5rem"/>
          <SideBarItemName>Orders</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>

        <SideBarItem>
          <BsFillTelephoneFill size="1.5rem"/>
          <SideBarItemName>Support</SideBarItemName>
          <IoIosArrowForward />
        </SideBarItem>
      </SideBarGroup>

     
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