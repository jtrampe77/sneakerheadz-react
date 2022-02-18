import React from 'react'
import {PageNotFoundContainer,PageHeader,PageTagline,BackToHomeButton,PageDiv} from './styles'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <>
    <PageNotFoundContainer>
      <PageDiv>
          <PageHeader>SORRY</PageHeader>
          <PageTagline>Page Not Found</PageTagline>
          <Link to='/dashboard'>
            <BackToHomeButton>Go Back</BackToHomeButton>
          </Link>
          
      </PageDiv>
    
    </PageNotFoundContainer>
 
    </>
  )
}

export default PageNotFound