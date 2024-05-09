export const getDay = () => {
  let today = new Date(); // 현재 로컬 시간
  today = new Date(today.toISOString()); // UTC 기준의 ISO 문자열로 변환 후 다시 Date 객체 생성

  const date1 = new Date('2024-05-10T00:00:00+09:00'); // KST 기준 시간 설정

  if (today < date1) {
    return '1';
  }
  return '2';
};
