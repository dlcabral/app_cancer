import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  color: #fff;
  height: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 100px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  font-family: system-ui;

  @media screen and (max-width: 500px){
    width: 500px;
  };
`;

export const FormWrap = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 80%;
    width: 500px;
  };
`;

export const Form = styled.div`
  height: 100%;
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px){
    width: 500px;
  };
`;

export const FormH1 = styled.h1`
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  padding-right: 250px;
  text-align: center;
  font-size: 30px;
  color: #000000;
  background: -webkit-linear-gradient(45deg,#65a6fe 30%,#8c3fff 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 500px){
    width: 500px;
    padding-right: 0px;
  };
`;

export const FormInput = styled.input`
  width: 500px;
  height: 35px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid gray;

  @media screen and (max-width: 500px){
    width: 400px;
  };
`;

export const FormMessage = styled.input`
  margin-top: 20px;
  width: 500px;
  height: 200px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid gray;

  @media screen and (max-width: 500px){
    width: 400px;
  };
`;

export const FormButton = styled.button`
  background: #f6567e;
  color: #ffffff;
  width: 510px;
  height: 40px;
  margin-top: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 18px;
  font-family: 'lato';
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity:0.5;
  };

  @media screen and (max-width: 500px){
    width: 400px;
  };
`;

export const ThankYou = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
`;
