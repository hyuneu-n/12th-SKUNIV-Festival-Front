// 날짜 계산
let today = new Date();
const date1 = new Date('2024-05-10');

export const getDay = () => {
  if (today < date1) {
    return '1';
  }
  return '2';
};
