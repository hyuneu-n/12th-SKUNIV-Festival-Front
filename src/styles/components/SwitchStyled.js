import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15% 0 0 0;
`;

export const WidthLine = styled.hr`
  width: 100%;
  border: 1px solid;
  margin-bottom: 5px;
`;

export const SwitchNav = styled(NavLink)`
  width: 32%;
  height: 45px;
  background-color: #f6f6f6;
  color: #000000;
  border-radius: 10px;
  border: none;
  font-family: 'Pretendard Variable', arial;
  font-weight: 700;
  font-size: 0.75em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  margin: 5% 5% 5% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background-color: #c2e3bd;
  }
`;
