import React from 'react'
import {PageNotFoundContainer,PageHeader,PageTagline,BackToHomeButton,PageDiv} from './styles'
import { Link } from 'react-router-dom'
import {AppBar} from '../../components/appbar'
import {FootBar} from '../../components/footbar'

function PageNotFound() {
  return (
    <>
     <AppBar />
    <PageNotFoundContainer>
      <PageDiv>
          <PageHeader>SORRY</PageHeader>
          <PageTagline>Page Not Found</PageTagline>
          <Link to='/dashboard'>
            <BackToHomeButton>Go Back</BackToHomeButton>
          </Link>
          
      </PageDiv>
    
    </PageNotFoundContainer>
    <FootBar />
 
    </>
  )
}

export default PageNotFound