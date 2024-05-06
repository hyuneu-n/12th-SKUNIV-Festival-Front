import React from 'react';
import styled from 'styled-components';
import Group from '../assets/images/timetable/Heize.png';
import {Link, useLocation} from 'react-router-dom';
const AdditionalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleIcon = styled.img`
  margin-top: 5%;
  width: 140px; /* 조정 */
  height: auto; /* 조정 */
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #5e5e5e;
  margin-top: 3%;
  margin-bottom: 5%;
`;

const AdditionalInfo4 = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <Link to="/timetable4" isClicked={pathname ==='/timetable4'}>
      <AdditionalInfoContainer>
        <CircleIcon src={Group} alt="Circle Icon" />
      </AdditionalInfoContainer>
      <Text>Heize</Text>
      </Link>
    </div>
  );
};

export default AdditionalInfo4;
