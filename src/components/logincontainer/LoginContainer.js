import React from 'react'
import {LoginImageContainer,LoginPanel,LoginHeader,LoginTagline,LoginForm,LoginImage, ImagePanel,LoginSubmitButton, LoginFormLabel, LoginFormInput,LoginInputContainer,ForgotPassword} from './styles'
import { Link, useNavigate } from 'react-router-dom';
import sneakersImage from '../../img/LoginPageImg.jpg'

function LoginContainer(){

    let navigation = useNavigate();

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('dashboard');
    }
    
   
    return(
        <>
          <LoginImageContainer>
              <LoginPanel>

                  <LoginHeader>Welcome Back</LoginHeader>
                  <LoginTagline>Access Your Sneakerz</LoginTagline>

                  <LoginForm onSubmit={onHandleSubmit}>

                    <LoginInputContainer>
                        <LoginFormLabel>Email</LoginFormLabel> 
                        <LoginFormInput type="email" required />
                  
                        <LoginFormLabel>Password</LoginFormLabel> 
                        <LoginFormInput type="password" required />
                    </LoginInputContainer>

                    <div>
                        <LoginSubmitButton type='submit'>LOGIN</LoginSubmitButton>
                    </div>
                   
                  </LoginForm>

            <Link to='/'>
            <ForgotPassword>Forgot Password?</ForgotPassword>
            </Link>
            
                  

              </LoginPanel>

              <ImagePanel>
                  <LoginImage src={sneakersImage} />
              </ImagePanel>
          </LoginImageContainer>  
        </>
    )
}

export default LoginContainer