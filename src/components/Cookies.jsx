import React, { useState } from 'react';

export default () => {
    const getTime = () => (
      document.cookie.split(';').map(cookie => {
        const [name, value] = cookie.split('=');
        if (name === 'time'){
          return value;
        }
      })
    );
    const storeTime = (value) => {
      setTime(value.toString());
      document.cookie = "time=" + value.toString();
    }
    const [time, setTime] = useState(getTime());
    
    return (
      <div>
          {time}
          <p>
            <button onClick={()=> storeTime(new Date())}>Set Time via Cookie</button>
          </p>
      </div>
    );
  }
  