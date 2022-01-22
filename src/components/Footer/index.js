import React from 'react'
import {FaGithub, FaYelp, FaYoutube, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/intuit-app/howitworks">How it works</FooterLink>
              {/* <FooterLink to="/">Testimonials</FooterLink> */}
              <FooterLink to="/intuit-app/aboutus">Who We Are</FooterLink>
              <FooterLink to="/intuit-app">Investors</FooterLink>
              <FooterLink to="/intuit-app">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/intuit-app">Contact</FooterLink>
              <FooterLink to="/intuit-app">Support</FooterLink>
              <FooterLink to="/intuit-app">Destinations</FooterLink>
              <FooterLink to="/intuit-app">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/intuit-app">Submit Video</FooterLink>
              <FooterLink to="/intuit-app">Ambassadors</FooterLink>
              <FooterLink to="/intuit-app">Agency</FooterLink>
              <FooterLink to="/intuit-app">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/intuit-app">GitHub</FooterLink>
              <FooterLink to="/intuit-app">Yelp</FooterLink>
              <FooterLink to="/intuit-app">Youtube</FooterLink>
              <FooterLink to="/intuit-app">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/intuit-app'>
              Intuit
            </SocialLogo>
            <WebsiteRights>Intuit Automation Inc. © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="www.github.com" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Yelp">
                <FaYelp />
              </SocialIconLink>            
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>            
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer