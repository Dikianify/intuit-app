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
      <Container style={{"min-height":height}}>
        <Icon to="/">Intuit</Icon>
        <FormWrap style={{"min-height":height - 160}}>
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

