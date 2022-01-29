import React from 'react'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormH2,
  FormButton,
} from './ThanksElements'


const parse_url = () => {
  const url = window.location.href
  const date=url.slice(url.indexOf("date=") + 8, url.indexOf("date=") + 26).replaceAll('%20', ' ') + "  from  "
  const time=url.slice(url.indexOf("time=") + 5, url.indexOf("time=") + 22).replaceAll('%20', ' ')
  return [date, time]
}


const Thanks = () => {
  var date, time = parse_url()
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Intuit</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Thank you for your submission! Your Zoom meeting will occur on this date:</FormH1>
              <FormH2>{date} {time}</FormH2>
              <FormH1>Any further submissions with this email will overwrite this requested time.</FormH1>
              <FormH1>Please be prepared to discuss company procedures in depth. Procedures involving data manipulation, Excel, database structure, and sending faxes / emails are areas especially ripe for automation.</FormH1>
              <FormH1>I look forward to speaking with you soon!</FormH1>
              <FormButton to='/' href="#top">Return to Homepage</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Thanks
