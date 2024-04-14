import styled from 'styled-components';
const BG = styled.div`
    display: flex;
    width: 60%;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin : 10px 19% 0px 19%;
`
const MiniBox = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: start;
    background-color: #ffffff;
    border-radius: 25px;
    padding: 37px 25px 37px 25px;
    margin : 10px 0% 0px 0%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Performance = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    color: #B2B2B2;
    margin-left: 10px;
    color: #000000;
`
const TimeLine = styled.h1`
    display: flex;
    width: 100%; 
    height: 38px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    border-radius: 15px;
    color: #404040;

    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
`
const BtnTimeTalbe = styled.a`
    display: flex;
    width: 53%; 
    height: 45px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.75em;
    margin-top: 10px;
    background-color: #f6f6f6;
    color: #4D5359;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`
export default function MiniTimeTable() {
    return (
        <BG>
            <MiniBox>
                <Performance>performance</Performance>
                <TimeLine>1111</TimeLine>
                <TimeLine>1111</TimeLine>
                <TimeLine>1111</TimeLine>
            </MiniBox>
            <BtnTimeTalbe href="/TimeTable">전체 일정 확인하기</BtnTimeTalbe>
        </BG>
    );
}