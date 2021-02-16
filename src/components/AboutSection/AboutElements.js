import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #fff;
  background: '#f9f9f9';
  font-family: system-ui;

  @media screen and (max-width: 500px) {
    width: 480px;
  }
`;

export const AboutWrapper = styled.div`
  flex-direction: column;
  height: 800px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding-top: 60px;
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;

  @media screen and (max-width: 600px) {
    width: 150px;
  }
`;

export const WhoIsThis =  styled.h1`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  color: #010606;
  font-size: 35px;
  background: -webkit-linear-gradient(45deg,#65a6fe 30%,#8c3fff 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 600px) {
    margin-left: 135px;
    font-size: 27px;
  }
`;

export const TitleWork = styled.h1`
  color: #010606;
  font-size: 30px;
  background: -webkit-linear-gradient(45deg,#65a6fe 9%,#8c3fff 12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleContact = styled.h1`
  color: #010606;
  font-size: 30px;
  background: -webkit-linear-gradient(45deg,#65a6fe 9%,#8c3fff 12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  display: block;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  color: #010606;

  @media screen and (max-width: 750px) {
    width: 400px;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    width: 450px;
  }
`;

export const InfoWrap = styled.div`
  margin-top: 100px;
  height: 300px;
  width: 100%;
  background: #d9d9d9;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-item: center;
  display: flex;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: auto;
    height: auto;
    margin-left: 0px;
    margin-right: 0px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 480px;
    height: 650px;
    margin-left: 0px;
    margin-right: 0px;
  }
`; 

export const Contact = styled.div`
  height: 100%;
  width: 700px;

  @media screen and (max-width: 1540px) {
    padding-left: 25px;
  }

  @media screen and (max-width: 780px) {
    width: 480px;
    height: 350px;
  }

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 450px;
  }
`; 

export const Works = styled.div`
  height: 100%;
  width: 700px;
  margin-left: 100px;

  @media screen and (max-width: 780px) {
    width: 480px;
    height: 350px;
    margin-left: 0;
  }

  @media screen and (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
    width: 450px;
  }
`;

export const SubtitleContact = styled.p`
  font-size: 20px;
  color: #595959;
`;

export const SubtitleWork = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #595959;
`;

export const SubSubContact = styled.p`
  font-size: 16px;
  color: #595959;
`;

export const Years = styled.div`
  font-size: 16px;
  color: #595959;
`;
export const Exp = styled.div`
  font-size: 16px;
  color: #595959;
`;

export const Projects = styled.div`
  font-size: 16px;
  color: #595959;
`;
export const Iwork = styled.div`
  font-size: 16px;
  color: #595959;
`;

export const IconMail = styled.div`
  margin-top: 30px;
  margin-right: 10px;
`;

export const EmailWrapper = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration:none;
`;
  
export const Email = styled.p`
  margin-top: 30px;
  font-size: 14px;
  color: #595959;
`;

export const YearExpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
export const Year = styled.div`
  font-size: 35px;
  color: #65a6fe;
  font-weight: bold;
`;
export const Plus = styled.div`
  margin-left: 5px;
  font-size: 30px;
  color: #65a6fe;
  font-weight: bold;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 100px;
`;
export const Quantity = styled.div`
  font-size: 35px;
  color: #65a6fe;
  font-weight: bold;
`;

export const YearPlusWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuantityPlusWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const YearOfExpWrapper = styled.div`
  flex-direction: column;
  margin-left: 10px;
`;

export const IworkOnWrapper = styled.div`
  flex-direction: column;
  margin-left: 10px;
`;

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;



