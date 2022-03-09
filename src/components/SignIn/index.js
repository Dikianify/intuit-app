import React, { useState } from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  TextLink
} from './SignInElements'


const SignIn = () => {
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;

  const [email, setEmail] = useState()

  const [pass, setPass] = useState()


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePassChange = (event) => {
    setPass(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://intuit-booking-api.herokuapp.com/sign_in', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify([email, pass])
    });
  }

  return (
    <>
      <Container style={{"minHeight":height}}>
        <Icon to="/">Intuit</Icon>
        <FormWrap style={{"minHeight":height -160}}>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in with your credentials. If you do not have an account, sign up below!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' onChange={handleEmailChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel> 
              <FormInput type='password' onChange={handlePassChange} required /> 
              <FormButton type="submit" value="Submit"
              >Sign In</FormButton>
              <TextLink to="/">Forgot password?</TextLink>
              <TextLink to="/signup">Sign up</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
