import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form
} from './AccountElements'

const Account = () => {
  const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
  return (
    <>
      <Container style={{"minHeight":height}}>
        <Icon to="/">Intuit</Icon>
        <FormWrap style={{"minHeight":height - 160}}>
          <FormContent>
            <Form>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Account

