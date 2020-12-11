import React, { useEffect, useState } from 'react';
let db;
export default () => {
  const getTime = () => {
    const objectStore = db.transaction(['time']).objectStore('time');
    const request = objectStore.get(1);
  
    request.onerror = (event) => {
      console.log('Transaction failed');
    };
  
    request.onsuccess = function( event) {
       if (request.result) {
         setTime(request.result.value);
       } else {
         console.log('No data record');
       }
    };
  }
  const storeTime = (value) => {
    setTime(value);
    const request = db.transaction(['time'], 'readwrite')
      .objectStore('time')
      .put({ id: 1, value });
  }
  const [time, setTime] = useState(null);
  
  useEffect(()=>{
    const request = window.indexedDB.open('timeIndexDB'); 
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
    
    request.onsuccess = (event) => {
      db = request.result;
      console.log('The database is opened successfully');
      setTime(getTime());
    };
    
    request.onupgradeneeded = (event) => {
      db = event.target.result;
      let objectStore;
      if (!db.objectStoreNames.contains('time')) {
        objectStore = db.createObjectStore('time', { keyPath: 'id' });
      }
    }
  }, [])

  return (
    <div>
        <h1>IndexDB</h1>
        {time && time.toString()}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via IndexDB</button>
        </p>
    </div>
  );
}

