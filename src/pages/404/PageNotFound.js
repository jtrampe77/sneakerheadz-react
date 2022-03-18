import React, {useState} from 'react'
import {PageNotFoundContainer,PageHeader,PageTagline,BackToHomeButton,PageDiv} from './styles'
import { Link } from 'react-router-dom'
import {auth} from 'libs/firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

import errorImg from 'img/errorImg.jpg'

function PageNotFound() {

  const [isUser, setIsUser] = useState(false)

  onAuthStateChanged(auth, (user)=>{
    if(user){
        setIsUser(true)
    }else{
        setIsUser(false)
    }
  })

  return (
    <>
 
    <PageNotFoundContainer>

      <img src={errorImg} alt="Jordans Hanging" />
      <PageDiv>
          <PageHeader>Hang In There!</PageHeader>
          <PageTagline>The page your looking for does not exist. Please Go Back.</PageTagline>

         {
            isUser? <Link to='/dashboard'><BackToHomeButton>Go Back</BackToHomeButton></Link> : <Link to='/'><BackToHomeButton>Go Back</BackToHomeButton></Link>
          }        
      </PageDiv>
    
    </PageNotFoundContainer>
  
 
    </>
  )
}

export default PageNotFound