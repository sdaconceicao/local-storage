import React, { useEffect, useState } from 'react';
import * as localForage from "localforage";

export default () => {
  const getTime = () => (
    localForage.getItem('time', (err, value)=>{
      if (!err) setTime(value);
    })
  );
  const storeTime = (value) => {
    setTime(value);
    localForage.setItem('time', value)
  }
  useEffect(()=>{
    getTime();
  }, [])
  const [time, setTime] = useState(null);

  return (
    <div>
        <h1>LocalForage</h1>
        {time && time.toString()}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via LocalForage</button>
        </p>
    </div>
  );
}

