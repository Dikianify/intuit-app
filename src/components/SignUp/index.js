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
} from './SignUpElements'


const SignUp = () => {
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
    fetch('https://intuit-booking-api.herokuapp.com/sign_up', {
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
              <FormH1>Sign up with your email and a secure password!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' onChange={handleEmailChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel> 
              <FormInput type='password' onChange={handlePassChange} required />
              <FormLabel htmlFor='for'>Confirm password</FormLabel> 
              <FormInput type='password' onChange={handlePassChange} required />
              <FormLabel htmlFor='for'>Name (optional)</FormLabel> 
              <FormInput type='text' onChange={handlePassChange} /> 
              <FormLabel htmlFor='for'>Company (optional)</FormLabel> 
              <FormInput type='text' onChange={handlePassChange} /> 
              <FormButton type="submit" value="Submit"
              >Create Account</FormButton>
              <TextLink to="/signin">Already have an account? Sign in here.</TextLink>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
