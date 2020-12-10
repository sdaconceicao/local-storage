import React, { useEffect, useState } from 'react';
let db;
export default () => {

  const [time, setTime] = useState(null);
  useEffect(()=>{
    const request = window.indexedDB.open('timeIndexDB'); 
    request.onerror = function (event) {
      console.log('The database is opened failed');
    };
    
    request.onsuccess = function (event) {
      db = request.result;
      console.log('The database is opened successfully');
      setTime(getTime());
    };
    
    request.onupgradeneeded = function(event) {
      db = event.target.result;
      let objectStore;
      if (!db.objectStoreNames.contains('time')) {
        objectStore = db.createObjectStore('time', { keyPath: 'id' });
      }
    }
  }, [])

  const storeTime = (value) => {
    setTime(value);
    const request = db.transaction(['time'], 'readwrite')
    .objectStore('time')
    .put({ id: 1, value });
  }

  const getTime = () => {
    const objectStore = db.transaction(['time']).objectStore('time');
    const request = objectStore.get(1);
  
    request.onerror = function(event) {
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

  return (
    <div>
        {time && time.toString()}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via Local Storage</button>
        </p>
    </div>
  );
}

