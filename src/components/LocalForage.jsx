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
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via LocalForage</button>
        </p>
        {time && (
          <>
            <h3>Saved Time</h3>
            <p>{time.toString()}</p>
          </>
        )}
    </div>
  );
}

export const ImageForage = () => {
  const getImage = () => (
    localForage.getItem('image', (err, value)=>{
      if (!err) setImage(value);
    })
  );
  const storeImage = (e) => {
    const reader  = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = function () {
      setImage(reader.result);
      localForage.setItem('image', reader.result);
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  useEffect(()=>{
    getImage();
  }, [])
  const [image, setImage] = useState(null);

  return (
    <div>
        <p>
          <input type="file" onChange={storeImage}/>
        </p>
        {image && (
          <>
            <h3>Saved Image</h3>
            <img src={image} height={200}/>
          </>
        )}
    </div>
  );
}

