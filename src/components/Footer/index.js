import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import {
  FooterContainer, 
  FooterWrap, 
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = ()=>{
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>Let's be social! Feel free to add me!</SocialLogo>
            <WebsiteRights>Diogo Lima Cabral {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/dlcabral' target='_blank' aria-label='Github'><FaGithub /></SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/diogolimacabral/' target='_blank' aria-label='Linkedin'><FaLinkedin /></SocialIconLink>
              <SocialIconLink href='https://www.facebook.com/diogolica' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/dlcabral/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
