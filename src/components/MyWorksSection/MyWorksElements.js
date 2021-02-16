import styled from 'styled-components';

export const MyWorksContainer = styled.div`
  color: #fff;
  background: '#f9f9f9';
  flex-direction: row;
  height: 800px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding-top: 60px;
  font-family: system-ui;

  @media screen and (max-width: 1049px) {
    margin-top: 300px;
    height: 2300px;
  }

  @media screen and (max-width: 1482px) {
    margin-top: 300px;
  }
`;

export const MyWorksTitle = styled.h1`
  display: block;
  margin-top: 40px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  color: #010606;
  font-size: 35px;
  background: -webkit-linear-gradient(45deg,#65a6fe 30%,#8c3fff 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WorksRowWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const WorksRow1 = styled.div`
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1050px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 500px) {
    margin-left: 40px;
  }
`;

export const WorkTitle = styled.p`
  margin-top: 5px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 35px;
  text-align: center;
  font-size: 25px;
  font-family: lato;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  background: #000000;
  border: 1px solid #000000;
  border-radius: 50px;
  cursor: pointer;
`;

export const Work = styled.div`
  width: 400px;

  @media screen and (max-width: 1049px) {
    margin-top: 50px;
  }
`;

export const TasyImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 310px;
  height: 600px;
  cursor: pointer;
`;

export const GLImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 310px;
  height: 600px;
  cursor: pointer;
`;

export const GCImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 310px;
  height: 600px;
  cursor: pointer;
`;
