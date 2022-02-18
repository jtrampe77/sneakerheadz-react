import styled from "styled-components";

const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:80vh;
`;

const PageHeader = styled.h1`
  font-size: 15rem;
  text-align: center;
  color: red;
  font-weight:bold;
`;

const PageTagline = styled.h2`
    font-size:3rem;
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
