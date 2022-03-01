import React from 'react'
import AboutUs from '../../components/about/AboutUs'
import SideBar from '../../components/sidebar/SideBar'
import { StoreFrontStyles } from '../../components/storefront/styles'
import {HeroBanner} from '../../components/herobanner'
import {AppBar} from '../../components/appbar'
import {FootBar} from '../../components/footbar'


function AboutUsPage(props){
    return(
        <>
         <AppBar />
        <HeroBanner />
        <StoreFrontStyles>
            <div>
                <SideBar />
            </div>

            <div>
                <AboutUs />
            </div>
          
        </StoreFrontStyles>
        <FootBar />
        </>
    )
}

export default AboutUsPage