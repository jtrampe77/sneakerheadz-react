import React from 'react'
import {PageNotFoundContainer,PageHeader,PageTagline} from './styles'
import { Link } from 'react-router-dom'
import Image from '../../img/pagenotfoundimg.jpg'


function PageNotFound() {
  return (
    <>
    <PageNotFoundContainer>
      <div>
          <PageHeader>SORRY</PageHeader>
          <PageTagline>Page Not Found</PageTagline>
      </div>
    
    </PageNotFoundContainer>
 
    </>
  )
}

export default PageNotFound