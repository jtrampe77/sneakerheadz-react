import React, {useState} from 'react'

import {AppBar} from '../../components/appbar'
import {FootBar} from '../../components/footbar'


import { DashBoardPageStyles } from './styles'


import {auth} from 'libs/firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import {Outlet, useNavigate} from 'react-router-dom'
import {SideBar} from 'components/sidebar'


function DashBoardPage(props) {


  const [isUser, setIsUser] = useState(false)
  const navigator = useNavigate()

  onAuthStateChanged(auth, (user)=>{
    if(user){
        setIsUser(true)
    }else{
        setIsUser(false)
        //login page
        navigator('/')
    }
  })

  if(isUser){
    return(
      <>
      <AppBar />


      
      <DashBoardPageStyles>
      <SideBar/>

      <Outlet />

      </DashBoardPageStyles>
    
      <FootBar />
    </>
        
    )
  
  }else{
    return null
  }

}

export default DashBoardPage