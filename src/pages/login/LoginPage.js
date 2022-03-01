import React, {useState} from 'react'
import {MainContainer,LoginPanel,LoginHeader,LoginTagline,LoginForm,LoginImage, ImagePanel, LoginFormLabel,LoginInputContainer,ForgotPassword} from './styles'
import {Input} from '../../ui/forms'
import { Link, useNavigate } from 'react-router-dom';
import {Button} from '../../ui/buttons'
import sneakersImage from '../../img/LoginPageImg.jpg'
import logo from '../../img/logo-black.png'


function LoginContainer(props){

    let navigation = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('dashboard');
        // console.log(email, password)
    }
    
   
    return(
        
        <MainContainer>

          
            <LoginPanel>

              <div>
              <LoginImage src={logo} alt="Logo" width="20%" margin="0 0 4rem 0" />

                <LoginHeader>Welcome Back</LoginHeader>
                <LoginTagline>Access Your Sneakerz</LoginTagline>

                <LoginForm onSubmit={onHandleSubmit}>

                  <LoginInputContainer>
                      <Input type="email" placeholder='Email' margin="3rem 0" required onChange={(e)=> setEmail(e.target.value)} />
                
                      <Input type="password" placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} />

                      <Link to='/'>
                          <ForgotPassword>Forgot Password?</ForgotPassword>
                      </Link>

                      <Button type='submit' bgcolor="red" color="white" padding="0.5rem 3rem" fontweight="bold" boxshadow="0 4px 4px 0 black" radius="3px">LOGIN</Button>
                  </LoginInputContainer>
                </LoginForm>

                </div>

            </LoginPanel>

            <LoginImage width="35%" src={sneakersImage} />

            
        </MainContainer>  
        
    )
}

export default LoginContainer