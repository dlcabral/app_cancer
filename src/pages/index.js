import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MyWorksSection from '../components/MyWorksSection';
import { aboutObjOne } from '../components/AboutSection/Data';
import { workObjOne } from '../components/MyWorksSection/Data';
import { contactObjOne } from '../components/ContactSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection/';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutSection {...aboutObjOne} />
      <MyWorksSection {...workObjOne} />
      <ContactSection {...contactObjOne} />
      <Footer />
    </>
  );
};

export default Home;
