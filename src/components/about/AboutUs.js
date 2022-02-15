import React from 'react';
import { AboutInfoContainer,AboutImg,AboutInfoDiv, AboutHeader,AboutInfoHeaders,AboutInfoParagraphs } from './styles';
import AboutImage from '../../img/jordan-about.jpg'


function AboutUs(){
    return(
        <>
        <AboutHeader>About Us</AboutHeader>
        <AboutInfoContainer>
            <AboutImg src={AboutImage} alt="About Image" />

            <AboutInfoDiv>

                <AboutInfoHeaders>What We Are About</AboutInfoHeaders>
                <AboutInfoParagraphs>
                SneakerHeadz is all about getting rare, limited-only, best of sneakers and reselling them for other sneakerheadz to enjoy. We are dedicated resellers that are always up to date to what is the latest in the sneaker industry.
                </AboutInfoParagraphs>

                <AboutInfoHeaders>Our Services</AboutInfoHeaders>
                <AboutInfoParagraphs>
                SneakerHeadz is dedicated to sell you the best sneaker out there. We want you to have the best sneaker game you could get. If you have a sneaker to resell, we can also sell it here on our website. Just send it by going to our RESELL page and send us the sneaker you want to be posted on our website.
                </AboutInfoParagraphs>

                <AboutInfoHeaders>Pricing</AboutInfoHeaders>
                <AboutInfoParagraphs>
                Prices are based of Stockx and Goat
                </AboutInfoParagraphs>

            </AboutInfoDiv>

        </AboutInfoContainer>
        </>
      
    )
}

export default AboutUs