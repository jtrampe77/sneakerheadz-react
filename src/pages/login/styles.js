import styled from "styled-components";
import loginBg from '../../img/loginbg.png'
import loginImg from '../../img/LoginPageImg.jpg'

const MainContainer= styled.div`
    /* display:flex;
    justify-content: space-around;
    gap:5rem;
    border: 1px solid black; */
    display:flex;
    justify-content: center;
    padding:3rem;
    background-image: url(${loginBg});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    height:100vh;


    .Toastify__toast {
    background-color:black;
    color: white;
    }

    .Toastify__toast-theme--colored.Toastify__toast--success {
      background-color: green;
      color: white;
    }




`;



const LoginPanel = styled.div`
 
    display:flex;
    justify-content:center;
    align-items:center;
    width:35%;
    padding: 5rem;
    gap: 3rem;
    text-align:center;
    border: 1px solid black;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

`;



const LoginHeader = styled.h2`
    font-size:3rem;
    font-weight:bold;
`

const LoginText = styled.h3`
    font-size:1rem;
    color: ${props => props.color || "black"};
    text-align:center;

`;

const LoginForm = styled.form`
  text-align:center;

`;



const LoginImage = styled.img`
    width: ${props => props.width || "100%"};
    margin: ${props => props.margin || ""};

`;

const LoginSubmitButton = styled.button`
  background-color:red;
  color:white;
  padding:0.5rem 3rem;
  font-weight:bold;
  border-radius:4px;
  border:none;
  box-shadow:0 4px 4px 0 black;

  &:hover{
    background-color:black;
  }

`;

const ImagePanel = styled.div`
  background-image:url(${loginImg});
  width:35%;
  background-size:cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:4rem;

`;

const LoginFormLabel = styled.label`
    margin:1rem 0 0 0;
    
 
`;

const LoginInputContainer = styled.div`
  /* display:flex;
  flex-direction:column;
  text-align:left;
  margin: 2rem 0; */
`;

const ForgotPassword = styled.p`
  color: #0059ff;
  margin-top:1rem;
  text-align:center;
`;



export {MainContainer,LoginPanel,LoginHeader,LoginText,LoginForm,ImagePanel,LoginImage,LoginSubmitButton, LoginFormLabel,LoginInputContainer,ForgotPassword}