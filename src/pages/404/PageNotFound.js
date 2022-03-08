import React, {useState} from 'react'
import {PageNotFoundContainer,PageHeader,PageTagline,BackToHomeButton,PageDiv} from './styles'
import { Link } from 'react-router-dom'
import {AppBar} from '../../components/appbar'
import {FootBar} from '../../components/footbar'
import {auth} from 'libs/firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'


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
     <AppBar />
    <PageNotFoundContainer>
      <PageDiv>
          <PageHeader>SORRY</PageHeader>
          <PageTagline>Page Not Found</PageTagline>

         {
            isUser? <Link to='/dashboard'><BackToHomeButton>Go Back</BackToHomeButton></Link> : <Link to='/'><BackToHomeButton>Go Back</BackToHomeButton></Link>
          }
    
        
       
          
      </PageDiv>
    
    </PageNotFoundContainer>
    <FootBar />
 
    </>
  )
}

export default PageNotFound