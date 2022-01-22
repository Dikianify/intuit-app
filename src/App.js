import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import BookingPage from './pages/Booking'
import AboutusPage from './pages/aboutus'
import InfoPage from './pages/info'
import ThanksPage from './pages/thanks'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/intuit-app" element={<Home/>} />
        <Route path="/intuit-app/booknow" element={<BookingPage/>} />
        <Route path="/intuit-app/aboutus" element={<AboutusPage/>} />        
        <Route path="/intuit-app/howitworks" element={<InfoPage/>} />
        <Route path="/intuit-app/thankyou" element={<ThanksPage/>} />
      </Routes>
    </Router>
  );
}

export default App;