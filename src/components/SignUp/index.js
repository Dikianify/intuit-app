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

  const [confirmPass, setConfirmPass] = useState()

  const [name, setName] = useState()

  const [company, setCompany] = useState()


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePassChange = (event) => {
    setPass(event.target.value)
  }

  const handleConfirmPassChange = (event) => {
    setConfirmPass(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCompanyChange = (event) => {
    setCompany(event.target.value)
  }


  const handleSubmit = (event) => {
    if (pass === confirmPass) {
      event.preventDefault();
      fetch('http://localhost:5000/create_account', {
        'method':'POST',
        'headers': {
        'Accept':'applitcation/json',
        'Content-Type':'application/json'
        },
        'body':JSON.stringify([email, pass, name, company])
      }).then(response => response.json())
        .then(data => {
          if (data === 'not ok') {
            var email_input = document.getElementsById("email");
            email_input.setCustomValidity("This email is already in use.");
          }
          else {
            window.parent.location = `/account`;
          }
        });
    }
    else {
      var pass_input = document.getElementsById("email");
      pass_input.setCustomValidity("Passwords must match.")
    }
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
              <FormInput id='email' type='email' onChange={handleEmailChange} required />
              <FormLabel htmlFor='for'>Password</FormLabel> 
              <FormInput id='pass' type='password' onChange={handlePassChange} required />
              <FormLabel htmlFor='for'>Confirm password</FormLabel> 
              <FormInput type='password' onChange={handleConfirmPassChange} required />
              <FormLabel htmlFor='for'>Name (optional)</FormLabel> 
              <FormInput type='text' onChange={handleNameChange} /> 
              <FormLabel htmlFor='for'>Company (optional)</FormLabel> 
              <FormInput type='text' onChange={handleCompanyChange} /> 
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
