import React, { useMemo } from 'react';
import * as S from '../styles/components/MiniTimeTable.styled';
import * as Info from '../utils/Performance.js';

export default function MiniTimeTable() {
  // 현재 시간을 자정으로 설정하여 날짜 비교 오류 방지
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const date1 = new Date('2024-05-09');
  const date2 = new Date('2024-05-10');

  // 날짜 비교 로직 수정
  const getDay = useMemo(() => {
    if (today < date1) {
      return '1';
    } else if (today >= date2) {
      return '2';
    }
    return '0';
  }, [today, date1, date2]);

  const list = useMemo(() => {
    return Info.Performance.filter((item) => item.day.toString() === getDay);
  }, [getDay]);

  return (
    <S.BG>
      <S.MiniBox>
        <S.Performance>performance</S.Performance>
        {list.length > 0 ? (
          list.map((item) => (
            <S.TimeLine key={item.id} style={{ whiteSpace: 'nowrap' }}>
              <span>
                {item.time} <span style={{ fontWeight: 800, paddingLeft: '10px' }}>{item.info}</span>
              </span>
            </S.TimeLine>
          ))
        ) : (
          <S.TimeLine>No performances today.</S.TimeLine>
        )}
      </S.MiniBox>
    </S.BG>
  );
}
