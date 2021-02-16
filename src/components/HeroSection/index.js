import React, {useState} from 'react';
import {Btn2} from '../Buttons/ButtonElements';
import {HeroContainer, HeroSvg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'; 

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = ()=> {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1>Hi, I am Diogo Cabral</HeroH1>
        <HeroP>
          A passionate mobile & web software developer based in Winnipeg, Canada
        </HeroP>
        <HeroBtnWrapper>
          <Btn2 to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='false'>
            Let's Talk! {hover ? <ArrowForward /> : <ArrowRight />}
          </Btn2>
        </HeroBtnWrapper>
      </HeroContent>
      <HeroSvg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#f9f9f9" fillOpacity="1" d="M0,288L80,256L160,128L240,224L320,192L400,32L480,128L560,160L640,128L720,192L800,256L880,256L960,288L1040,0L1120,160L1200,64L1280,0L1360,192L1440,160L1440,320L1360,320L1280,320L1200,320L1120,320L1040,320L960,320L880,320L800,320L720,320L640,320L560,320L480,320L400,320L320,320L240,320L160,320L80,320L0,320Z"></path></svg>
      </HeroSvg>
    </HeroContainer>
  )
}

export default HeroSection;
