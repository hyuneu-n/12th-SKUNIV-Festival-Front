import React from 'react';
import styled from 'styled-components';
import Group from '../../public/timetable/Mask group.svg'

const AdditionalInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   
 
`;

const CircleIcon = styled.img`
  
   width: 200px; /* 조정 */
  height: 232px; /* 조정 */
  
`;

const Text = styled.p`
display: flex;
  align-items: center;
  justify-content: center;
  font-family: SUIT Variable, sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #5e5e5e;
   
`;

const AdditionalInfo = () => {
  return (
    <div>
    <AdditionalInfoContainer>
      <CircleIcon src={Group} alt="Circle Icon" />
       
    </AdditionalInfoContainer>
    <Text>Tayeon</Text>
    </div>
  );
};

export default AdditionalInfo;
