import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
  background-image: linear-gradient(180deg, #65a6fe, #8c3fff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  font-family: system-ui;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, 
      rgba(0,0,0,0.2) 0%), 
      rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(
      180deg, 
      rgba(0,0,0,0.2) 0%, 
      transparent 100%
    );
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-center: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP =  styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSvg = styled.svg`
  flex: none;
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 467px){
    top: 350px;
  }

  @media screen and (min-width: 571px){
    top: 340px;
  }

  @media screen and (min-width: 907px){
    top: 310px;
  }

  @media screen and (min-width: 1491px){
    top: 250px;
  }

  @media screen and (min-width: 2022px){
    top: 210px;
  }

  @media screen and (min-width: 2475px){
    top: 180px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`



