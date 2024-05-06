import React from 'react';
import styled from 'styled-components';
import Group from '../assets/images/timetable/fromis_9.svg';

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
  font-family: Pretendard, sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #5e5e5e;
  margin-top: 3%;
  margin-bottom: 5%;
`;

const AdditionalInfo2 = () => {
  return (
    <div>
      <AdditionalInfoContainer>
        <CircleIcon src={Group} alt="Circle Icon" />
      </AdditionalInfoContainer>
      <Text>fromis_9</Text>
    </div>
  );
};

export default AdditionalInfo2;
