import React, { useState } from 'react';

export default () => {
  const [time, setTime] = useState(localStorage.getItem('lsTime'));
  const storeTime = (value) => {
    localStorage.setItem('lsTime', value.toString());
    setTime(value.toString());
  }
  return (
    <div>
        {time}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via Local Storage</button>
        </p>
    </div>
  );
}

