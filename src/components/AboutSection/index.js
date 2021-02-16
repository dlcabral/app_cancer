import React from 'react';
import {
  AboutContainer, 
  AboutWrapper, 
  WhoIsThis, 
  Subtitle, 
  InfoWrap, 
  Contact,
  TitleContact,
  SubtitleContact,
  SubSubContact,
  EmailWrapper,
  IconMail,
  Email, 
  Img,
  Works,
  TitleWork,
  SubtitleWork,
  YearExpWrapper,
  Year,
  Plus,
  Years,
  Exp,
  ProjectsWrapper,
  Quantity,
  Projects,
  Iwork,
  YearPlusWrapper,
  QuantityPlusWrapper,
  YearOfExpWrapper,
  IworkOnWrapper,
  WorkWrapper,
} from '../AboutSection/AboutElements';
import {FiMail} from 'react-icons/fi';

const AboutSection = ({whoIsThis, subtitle, img, alt, subtitleMsg, saying, id})=>{
  return(
    <>
      <AboutContainer id={id}>
        <AboutWrapper>
          <Img src={img} alt={alt}/>
          <WhoIsThis>{whoIsThis}</WhoIsThis>
          <Subtitle>{subtitle}</Subtitle>
          <InfoWrap>
            <Contact>
              <TitleContact>Contact</TitleContact>
              <SubtitleContact>Let's talk about what you need</SubtitleContact>
              <SubSubContact>{subtitleMsg}</SubSubContact>
              <EmailWrapper href='mailto:diogo.lima.cabral@gmail.com' target='_blank'><IconMail><FiMail size={20} color={'blue'}/></IconMail><Email>Diogo.Lima.Cabral@Gmail.Com</Email></EmailWrapper>
            </Contact>
            <Works>
              <TitleWork>Work</TitleWork>
              <SubtitleWork>{saying}</SubtitleWork>
              <WorkWrapper>
                <YearExpWrapper>
                  <YearPlusWrapper><Year>8</Year><Plus>+</Plus></YearPlusWrapper>
                  <YearOfExpWrapper>
                    <Years>Years</Years>
                    <Exp>of Experience</Exp>
                  </YearOfExpWrapper>
                </YearExpWrapper>
                <ProjectsWrapper>
                  <QuantityPlusWrapper><Quantity>7</Quantity><Plus>+</Plus></QuantityPlusWrapper>
                  <IworkOnWrapper>
                    <Projects>Projects</Projects>
                    <Iwork>I worked on</Iwork>
                  </IworkOnWrapper>
                </ProjectsWrapper>
              </WorkWrapper>
            </Works>
          </InfoWrap>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
