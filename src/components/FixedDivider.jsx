import styled from 'styled-components';


 
const Divider = styled.div`
  position: absolute;
  top: 50%; /* 중앙 정렬 */
  left: 50%;
  transform: translate(-50%, -50%); /* 가운데 정렬 */
  height: 80%; /* 구분선의 높이 설정 */
  width: 2px; /* 구분선의 너비 설정 */
  background-color: #000; /* 구분선의 색상 설정 */
`;

const FixedDivider = () => {
  return (
   
    <Divider />
 
  );
};

export default FixedDivider;
