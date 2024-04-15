import * as S from '../styles/components/MiniTimeTable.styled';
import * as Info from '../utils/Performance.js';
export default function MiniTimeTable(Props) {
    // 날짜 계산
    var today = new Date();
    const date1 = new Date('2024-05-09');
    const date2 = new Date('2024-05-10');
    const getDay = () => {
        var day = "0";
        if (today < date1) {
            day = "1";
        }
        else if (today >= date2) {
            day = "2";
        }
        return day
    }
    function getList() {
        const Day = getDay();
        if (Day === "1") {
            return Info.Performance.filter((item) => item.day === 1);
        }
        else if (Day === "2") {
            return Info.Performance.filter((item) => item.day === 2);
        }
    }

    return (
        <S.BG>
            <S.MiniBox>
                <S.Performance>performance</S.Performance>
                {

                    getList().map((item) => {
                        return (
                            <S.TimeLine key={item.id} style={{ whiteSpace: 'nowrap' }}>
                                <span> {item.time}  <span style={{ fontWeight: 800 }}>{item.info}</span></span>
                            </S.TimeLine>
                        );

                    })
                }
            </S.MiniBox>
        </S.BG>
    );
}