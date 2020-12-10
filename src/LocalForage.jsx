import React, { useEffect, useState } from 'react';
import * as localForage from "localforage";

export default () => {
  const [time, setTime] = useState(null);
  const storeTime = (value) => {
    setTime(value);
    localForage.setItem('time', value)
  }
  useEffect(()=>{
    localForage.getItem('time', (err, value)=>{
      if (!err) setTime(value);
    })
  }, [])
  return (
    <div>
        {time && time.toString()}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via Local Storage</button>
        </p>
    </div>
  );
}

