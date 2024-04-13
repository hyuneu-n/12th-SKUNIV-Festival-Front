import MainLogo from '../../public/MainLogo.svg';
import test from '../../public/test.png';
import styled from 'styled-components';

const SContainer = styled.div`
    display: flex;
    width : 114px;
    height: 137px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 0px 0px 0px 0px;
`
const SBox = styled.div`
    width : 114px;
    height: 114px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 0px;
`
const StyledName = styled.p`
    font-size: 14px;
    width : 100%;
    font-family: "Pretendard Variable", arial;
    font-style: bold;
    text-align: center;
`
const StyledMajor = styled.p`
    font-size : 12px;
    width : 100%;
    font-family: "Pretendard Variable", arial;
    font-weight: 300;
    text-align: center;
`
const StyledImg = styled.img`
    width : 60px;
    height: 60px;
` 
export default function Profile(Props) {
    return (
        <>
            <SContainer>
                <SBox>
                    <StyledImg src={MainLogo}></StyledImg>
                    <StyledName>{Props.name}</StyledName>
                </SBox>
                <StyledMajor>{Props.major}</StyledMajor>
            </SContainer>
        </>
    );
}