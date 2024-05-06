import { useState } from 'react';

export default function AdminLogin() {
  const [pwd, setPwd] = useState(null);
  function getPwd(e) {
    setPwd(e.target.value);
  }
  return (
    <>
      <input type="test" onChange={getPwd} />
    </>
  );
}
