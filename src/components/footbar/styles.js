import styled from "styled-components";

const FootBarStyles = styled.footer`
  border: 1px solid black;
  padding: 1rem;
  text-align:center;
  background-color: black;
  color: white;
`;

const FootBarImg = styled.img`
  margin: 1rem 3rem;
  width: 10%;
  @media screen and (min-width:900px){
    width:3%;
  }


`

export {FootBarStyles, FootBarImg}