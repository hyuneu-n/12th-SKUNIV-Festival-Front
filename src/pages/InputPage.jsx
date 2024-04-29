import { useState } from 'react';
import NotificationInput from '../components/NotificationInput';
import LostArticleInput from '../components/LostArticleInput';

export default function InputPage() {
  const [type, setType] = useState('공지');

  function setSelectedOption(e) {
    setType(e.target.value);
    console.log(type);
  }
  return (
    <>
      <select onChange={setSelectedOption} value={type}>
        <option value="공지">공지</option>
        <option value="분실물">분실물</option>
      </select>
      {type === '공지' ? <NotificationInput /> : <LostArticleInput />}
    </>
  );
}
