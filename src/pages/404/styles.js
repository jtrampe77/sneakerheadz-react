import styled from "styled-components";
import loginBg from '../../img/loginbg.png'

const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${loginBg});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    height:100vh;
    

    img{
      width:30%;
      height:auto;
      margin:3rem;
    }
`;

const PageHeader = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: red;
  font-weight:bold;
`;

const PageTagline = styled.h2`
    font-size:1rem;
    text-align: center;
`;

const BackToHomeButton = styled.button`
  padding:1rem 2rem;
  background-color: black;
  color: white;
  border-radius: 3px;
  text-align:center;
  margin-top:3rem;

  &:hover{
      background-color:red;
      font-weight:bold;  
      box-shadow: 0 2px 4px 0 black;
  }
`;

const PageDiv = styled.div`
  text-align:center;
`;


export {PageNotFoundContainer,PageHeader,PageTagline,BackToHomeButton,PageDiv}
