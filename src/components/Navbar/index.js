import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const onClickFunc = ()=>{
    props.toggle();
  };

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  } 

  useEffect(()=>{
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = ()=>{
    scroll.scrollToTop();
  };

  return (
      <>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>Diogo Cabral</NavLogo>
            <MobileIcon onClick={()=> onClickFunc()}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="work" smooth={true} duration={500} spy={true} exact='true' offset={-80}>My Works</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
  )
}

export default Navbar;
