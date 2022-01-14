import React, { useState, useEffect } from 'react'
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
  CalendarWrapper,
  CalendarBook,
  TimesWrapper,
  TimesLabel
} from './BookingElements'
import Select from 'react-dropdown-select'


const Booking = () => {
  var oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  var today = new Date();
  var five_days = new Date(today.setDate(today.getDate() + 5));
  var start_date = new Date(five_days)

  if (start_date.getDay() === 6) {
    start_date = new Date(start_date.setDate(start_date.getDate() + 2));
  } else if (start_date.getDay() === 0) {
    start_date = new Date(start_date.setDate(start_date.getDate() + 1));
  }

  const [date, setDate] = useState(start_date)

  const [options, setOptions] = useState()

  useEffect(()=>{
    console.log(date)
    fetch('http://localhost:5000/get_times', {
      'method':'POST',
      'headers': {
      'Accept':'applitcation/json',
      'Content-Type':'application/json'
      },
      'body':JSON.stringify(date)
  })
  .then(response => response.json())
  .then(response => setOptions(response))
  .catch(error => console.log(error))
  },[date])


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/intuit-app">Intuit</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Enter your email, then pick a date and time for your consultation</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <CalendarWrapper>
                <CalendarBook 
                  calendarType={"US"}
                  onChange={setDate}
                  value={date}
                  minDate={new Date()}
                  maxDate={oneYearFromNow}
                  minDetail='year'
                  next2Label={null}
                  prev2Label={null}
                  tileDisabled={({date}) =>
                  date.getDay() === 6 ||
                  date.getDay() === 0 
                  || (date.getTime() - new Date().getTime()) / 86400000 < 4
                  }
                />
              </CalendarWrapper>
              <TimesWrapper>
                <TimesLabel>Select time:</TimesLabel>
                <Select 
                  multi
                  options={options}
                  onChange={(values) => this.onchange(values)}
                />
              </TimesWrapper>
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Booking
