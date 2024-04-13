import Profile from "../components/Profile";
import LogoSquare from '../../public/LogoSquare.svg';
import styled from 'styled-components';
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";


const Title = styled.h1`
    margin-top: 69px;
    font-size: 15px;
    font-family: SUIT Variable, sans-serif;
    font-style: extra-bold;
`

const Logo = styled.img`
    width : 132px;
    height: 132px;
`
const Info = styled.h1`
    margin-top: 16px;
    font-size: 15px;
    font-family: Pretendard Variable, sans-serif;
    font-style: bold;
`
const Script = styled.h1`
    margin-top: 19px;
    margin-bottom: 39px;
    font-size: 13px;
    font-family: Pretendard, sans-serif;
    font-weight: 200;
`
const Part = styled.h1`
    margin-top: 20px;
    font-size: 15px;
    font-family: Pretendard, sans-serif;
    font-style: bold;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InfoList = styled.div`
    display: flex;
    widtg : 100%;
    margin: 0px 24px 0px 24px; 
    justify-content: center;
`
export default function MadeBy() {
    return (
        <>
            <MenuBar></MenuBar>
            <InfoBox>
                <Title> Made By</Title>
                <Logo src={LogoSquare}></Logo>
                <Info>멋쟁이 사자처럼</Info>
                <Script>안녕하세요안녕하세요</Script>
                <Part>PM/DESIGN</Part>
                <InfoList>
                    <Profile name="민동명" major="컴퓨터공학과22" />
                    <Profile name="민동명" major="컴퓨터공학과22" />
                    <Profile name="민동명" major="컴퓨터공학과22" />
                </InfoList>
                <Part>BACKEND</Part>
                <InfoList>
                    <Profile name="민동명" major="컴퓨터공학과" />
                    <Profile name="민동명" major="컴퓨터공학과" />
                    <Profile name="민동명" major="컴퓨터공학과" />
                </InfoList>
                <Part>FRONTEND</Part>
                <InfoList>
                    <Profile name="민동명" major="컴퓨터공학과" />
                    <Profile name="민동명" major="컴퓨터공학과" />
                    <Profile name="민동명" major="컴퓨터공학과" />
                </InfoList>
                <Footer></Footer>
            </InfoBox>
        </>
    );
}