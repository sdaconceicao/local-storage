import React, { useEffect, useState } from 'react';
import PouchDB from "pouchdb";

let dbTime;
let db;
export default () => {
  const getTime = () => {
    dbTime.get('time').then(doc=>{
      setTime(new Date(doc.value));
    })
  }
  const storeTime = (value) => {
    setTime(value);
    dbTime.get('time').then(
    doc=>{
     doc.value = value;
     dbTime.post(doc);
    },
    err=>{
      dbTime.put({
        "_id": 'time',
        value
      });
    });
  }
  const [time, setTime] = useState(null);

  useEffect(()=>{
    dbTime = new PouchDB('timeDB');
    getTime();
  }, [])
  return (
    <div>
        <p>
          <button onClick={()=> storeTime(new Date())}>Set Time via PouchDB</button>
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


export const UserExample = () => {
  const getUser = () => {
    db.get('user').then(doc=>{
      setUser(doc.value);
    })
  }
  const storeUser = (value) => {
    setUser(value);
    db.get('user').then(
    doc=>{
     doc.value = value;
     db.post(doc);
    },
    err=>{
      db.put({
        "_id": 'user',
        value
      });
    });
  }
  const [user, setUser] = useState(null);

  const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const generateName = () => {
    const firstNames = ["Belinda", "Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];
    const lastNames = ["Apple", "Baggins", "Banks", "Boffin", "Bolger", "Bracegirdle", "Brandybuck", "Brockhouse", "Brown", "Brownlock", "Bunce", "Burrowes", "Butchers", "Chubb", "Clayhanger", "Cotton", "Diggle", "Fairbairn", "Gamgee", "Gammidge", "Gardner", "Goldworthy", "Goodbody", "Goodchild", "Goold", "Greenhand", "Grubb", "Hayward", "Headstrong", "Hornblower", "Lightfoot", "Longhole", "Maggot", "Mugwort", "Noakes", "North-took", "Oldbuck", "Proudfoot", "Puddifoot", "Roper", "Rumble", "Sackville-Baggins", "Sandheaver", "Sandyman", "Smallburrow", "Took", "Tunnelly", "Twofoot", "Underhill", "Whitfoot"];
    return firstNames[generateRandomInt(0, firstNames.length + 1)] + ' ' + lastNames[generateRandomInt(0, lastNames.length + 1)];
  }

  useEffect(()=>{
    db = new PouchDB('userDB');
    getUser();
  }, [])
  return (
    <div>
        <p>
          <button onClick={()=> storeUser({
            name: generateName(),
            age: generateRandomInt(10, 100)
          })}>Generate New User via PouchDB</button>
        </p>
        {user && (
          <>
            <h3>Stored User</h3>
            <h4>Name</h4>
            {user.name}
            <h4>Age</h4>
            {user.age}
          </>
        )}
    </div>
  );
}

