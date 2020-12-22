import React, { useState } from 'react';

export default () => {
    const getTime = () => {
      return localStorage.getItem('lsTime')
    }
    const storeTime = (value) => {
      setTime(value.toString());
      localStorage.setItem('lsTime', value.toString());
    }
    const [time, setTime] = useState(getTime());
    return (
      <div>
          {time}
          <p>
            <button onClick={()=> storeTime(new Date())}>Set Time via Local Storage</button>
          </p>
      </div>
    );
  }