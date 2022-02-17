import styled from "styled-components";

const LoginImageContainer= styled.div`
    display:flex;
    justify-content: space-around;
    gap:5rem;
`;

const LoginPanel = styled.div`
    width: 50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
`;

const LoginHeader = styled.h2`
    font-size:4rem;
    font-weight:bold;
`

const LoginTagline = styled.h3`
    font-size:1.5rem;

`;

const LoginForm = styled.form`
  text-align:center;

`;

const ImagePanel = styled.div`
   width:50%;
`;

const LoginImage = styled.img`
 
`;

const LoginSubmitButton = styled.button`
  background-color:red;
  color:white;
  padding:0.5rem 1rem;
  font-weight:bold;
  border-radius:4px;
  border:none;
  box-shadow:0 4px 4px 0 black;

`;

const LoginFormInput = styled.input`
`;

const LoginFormLabel = styled.label`
    margin:1rem 0 0 0;
 
`;

const LoginInputContainer = styled.div`
  display:flex;
  flex-direction:column;
  text-align:left;
  margin: 2rem 0;
`;



export {LoginImageContainer,LoginPanel,LoginHeader,LoginTagline,LoginForm,ImagePanel,LoginImage,LoginSubmitButton, LoginFormInput, LoginFormLabel,LoginInputContainer}