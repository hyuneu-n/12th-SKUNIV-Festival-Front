import React from 'react';
import styled from 'styled-components';
import Group from '../assets/images/timetable/day6.svg';

const AdditionalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleIcon = styled.img`
  margin-top: 5%;
  width: 160px; /* 조정 */
  height: 140px; /* 조정 */
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SUIT Variable, sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #5e5e5e;
  margin-bottom: 5%;
`;

const AdditionalInfo5 = () => {
  return (
    <div>
      <AdditionalInfoContainer>
        <CircleIcon src={Group} alt="Circle Icon" />
      </AdditionalInfoContainer>
      <Text>DAY6</Text>
    </div>
  );
};

export default AdditionalInfo5;

