import React, {useState, useEffect} from 'react'
import Icon1 from '../../images/logo.PNG'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavLogoLink, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 740) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogoLink to='home' smooth={true} duration={500} exact='true' offset={-80}>
            <NavLogo src={Icon1}>
            </NavLogo> 
          </NavLogoLink>            
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
              to="about" 
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-78}
              >About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-77}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-77}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-75}>Consult</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/intuit-app/booknow">Book Now</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
