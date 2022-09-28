import React from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { db } from './firebase.js'
import { v4 } from "uuid";
import { storage } from "./firebase";

import { useState } from "react";
function Profile(props) {

  const profilesCollectionRef = collection(db,"profiles")
  const certificatesCollectionRef = collection(db,"certificates")


  const [certificateUpload, setNewCertificateUpload] = useState(null)
  const [newName, setNewName] = useState("")
  const [newfName, setNewfName] = useState("")
  const [newlName, setNewlName] = useState("")

function handleClick(event) {
event.preventDefault()
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`
let count = 0
let id = 0
let idStr = ""
let  certificateBundleID = v4()

//get profiles.
 getDocs(certificatesCollectionRef).then((response) => {
console.log(`OG count is ${count}`)
     count = response.docs.length - 1

     if (count < 0 ) {
       count = 0
     }
let hasUploaded = false
console.log(`returned count is ${count}, docs ${response.docs.length}`);
for (let i = 0; i < 5; i++) {

        id = (count * 5) + 1 + i
console.log(`LOOP:  count is ${count}, id is ${id}`);
        if (id < 9)  {
        idStr = "#00000" + id
      } else if (id < 99) {
          idStr = "#0000" + id
        } else if (id < 999) {
          idStr = "#000" + id
        }
        console.log(`idStr = ${idStr}`);

  const certificatesListRef = ref(storage, `cert-pdfs/${idStr}.pdf`);
        if (hasUploaded == false) {
          uploadBytes(certificatesListRef, certificateUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              if (url !== null) {

                addDoc(certificatesCollectionRef, { certificateBundleID:certificateBundleID, id:idStr, level:1, date:currentDate,link:url, fname:newfName, lname:newlName})


              }
            });
          })
          console.log(`V1 hasUploaded is ${hasUploaded}`);
          hasUploaded = true
          console.log(`V2 hasUploaded is ${hasUploaded}`);


        } else {
          console.log("THIS IS GETTING RAN");
          addDoc(certificatesCollectionRef, { certificateBundleID:certificateBundleID, id:idStr, level:1, date:"",link:"", fname:newfName, lname:newlName})

        }
}
});
}

  return (
<div>
    <div>
        <input type="text" onChange={(event) => {
          setNewfName(event.target.value)
        }}/>
    </div>
    <div>
        <input type="text"  onChange={(event) => {
          setNewlName(event.target.value)
        }}/>
    </div>
    <div>
        <input type="file" onChange={(event) => { setNewCertificateUpload(event.target.files[0]); }}/>
    </div>
    <div>

    </div>
    <button onClick={handleClick} >Submit</button>
    </div>

  );
}


export default Profile;
