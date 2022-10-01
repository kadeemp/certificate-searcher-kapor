import React from 'react';
import {
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

import { db } from './firebase.js'
import { v4 } from "uuid";



import { useState } from "react";
function AddProfile(props) {

  const profilesCollectionRef = collection(db,"profiles")
  const certificatesCollectionRef = collection(db,"certificates")
  const [newfName, setNewfName] = useState("")
  const [newlName, setNewlName] = useState("")
  const [newPassword, setNewPassword] = useState("")


  function reloadPage() {
    window.location.reload(false)
  }
  function nukeDatabase() {

    }

function handleClick(event) {
      event.preventDefault()
      const date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${month}-${day}-${year}`;
      let count = 0;
      let id = 0;
      let idStr = "";
      let  certificateBundleID = v4();


      })
}

  return (
    <div>
      <div>
          <input id="fname" type="text" onChange={(event) => {
            setNewfName(event.target.value)
          }}/>
      </div>
      <div>
          <input id="lname" type="text"  onChange={(event) => {
            setNewlName(event.target.value)
          }}/>
      </div>
      <div>
          <input id="password" type="text"  onChange={(event) => {
            setNewPassword(event.target.value)
          }}/>
      </div>
      <div>

      </div>
      <button onClick={handleClick} >Submit</button>
    </div>

  );
}


export default AddProfile;
