import React, { useEffect, useState } from 'react';
import PouchDB from "pouchdb";

let db;
export default () => {
  const getTime = () => {
    db.get('time').then(doc=>{
      setTime(new Date(doc.value));
    })
  }
  const storeTime = (value) => {
    setTime(value);
    db.get('time').then(
    doc=>{
     doc.value = value;
     db.post(doc);
    },
    err=>{
      db.put({
        "_id": 'time',
        value
      });
    });
  }
  const [time, setTime] = useState(null);

  useEffect(()=>{
    db = new PouchDB('timeDB');
    getTime();
  }, [])
  return (
    <div>
        {time && time.toString()}
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via PouchDB</button>
        </p>
    </div>
  );
}

