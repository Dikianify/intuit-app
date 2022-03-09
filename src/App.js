import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import BookingPage from './pages/Booking'
import AboutusPage from './pages/aboutus'
import InfoPage from './pages/info'
import ThanksPage from './pages/thanks'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import CancelledPage from './pages/cancelled'
import AccountPage from './pages/account'

function App() {
  fetch('https://intuit-booking-api.herokuapp.com/', {
    'headers': {
    'Accept':'applitcation/json',
    'Content-Type':'application/json'
    }
  });
  setInterval(function() {
  fetch('https://intuit-booking-api.herokuapp.com/', {
    'headers': {
    'Accept':'applitcation/json',
    'Content-Type':'application/json'
    }
  });
}, 300000); // every 5 minutes (300000)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booknow" element={<BookingPage/>} />
        <Route path="/aboutus" element={<AboutusPage/>} />        
        <Route path="/howitworks" element={<InfoPage/>} />
        <Route path="/thankyou" element={<ThanksPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/cancelbooking" element={<CancelledPage/>} />
        <Route path="/Account" element={<AccountPage/>} />
      </Routes>
    </Router>
  );
}

export default App;