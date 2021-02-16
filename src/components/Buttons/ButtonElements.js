import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Btn1 = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const Btn2 = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? 'linear-gradient(180deg, #00ffd8, #7cff8b)' : 'linear-gradient(to bottom right, #7cff8b, #00ffd8)')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'linear-gradient(180deg, #7cff8b, #00ffd8)' : 'linear-gradient(to bottom right, #00ffd8, #7cff8b)')};
  }
`;