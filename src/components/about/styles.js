import styled from "styled-components";

const AboutInfoContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;
    @media screen and (min-width:900px){
      width: 80%;
        margin: 2rem auto 7rem auto;
        padding: 2rem;
        box-shadow: 0 0 4px black;
        display: flex;
        align-items: center;
    }

`;

const AboutImg = styled.img`

  @media screen and (min-width:900px){
    width: 40%;
    padding-right:2rem;  
  }

`

const AboutInfoDiv = styled.div`
    margin-bottom: 2rem;
`

const AboutHeader = styled.h2`
  font-size:3rem;
  text-align:center;
  margin:5rem 0;
  font-weight:bold;
   
`

const AboutInfoHeaders = styled.h3`
    font-size: 1.4rem;
    color: red;
    font-weight: bold;
`
const AboutInfoParagraphs = styled.p`
  font-size:1rem;
  margin-bottom:2rem;
`


export {AboutInfoContainer,AboutImg, AboutInfoDiv, AboutHeader,AboutInfoHeaders,AboutInfoParagraphs}