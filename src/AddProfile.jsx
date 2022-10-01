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
function AddProfile(props) {

  const profilesCollectionRef = collection(db,"profiles")
  const certificatesCollectionRef = collection(db,"certificates")
  const [certificateUpload, setNewCertificateUpload] = useState(null)
  const [newName, setNewName] = useState("")
  const [newfName, setNewfName] = useState("")
  const [newlName, setNewlName] = useState("")

  function reloadPage() {
    window.location.reload(false)
  }
  function nukeDatabase() {

              getDocs(profilesCollectionRef).then((response) => {
                  response.docs.forEach((item) => {
                     deleteDoc(doc(db, "profiles", `${item.id}`));
                  }); })

              getDocs(certificatesCollectionRef).then((response) => {
                  response.docs.forEach((item) => {
                      deleteDoc(doc(db, "certificates", `${item.id}`));
        });
      })
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

      //get profiles.
      getDocs(profilesCollectionRef).then((response) => {
          count = response.docs.length

          if (count < 0 ) {
            count = 0
          } else if (count == 0) {
            count = 0
          }

          console.log(`response is ${response.docs}`);
          console.log(`count is ${count}`);
      addDoc(profilesCollectionRef,{dateAdded:currentDate, certificateBundleID:certificateBundleID,fname:newfName,lname:newlName, level:1})

             id = (count * 5) + 1

             if (id <= 9)  {
             idStr = "#00000" + id
           } else if (id <= 99) {
               idStr = "#0000" + id
             } else if (id <= 999) {
               idStr = "#000" + id
             }
             // console.log(`idStr = ${idStr}`);
       const certificatesListRef = ref(storage, `cert-pdfs/${idStr}.pdf`);
       if (certificateUpload == null ) {

         for (let i = 0; i < 5; i++) {

                 if (id <= 9)  {
                 idStr = "#00000" + id
                 } else if (id <= 99) {
                   idStr = "#0000" + id
                 } else if (id <= 999) {
                   idStr = "#000" + id
                 }
                 console.log(` Outer idStr:${idStr}`);
         addDoc(certificatesCollectionRef, { certificateBundleID:certificateBundleID, id:idStr, level:0, date:"",link:"", fname:newfName, lname:newlName})
         id = id + 1
       }
       // setTimeout(function() { reloadPage(); }, 1500);
       } else {
        console.log("certificate uploaded");
         uploadBytes(certificatesListRef, certificateUpload).then((snapshot) => {
           getDownloadURL(snapshot.ref).then((url) => {
              console.log("url returned");
                              if (id <= 9)  {
                                idStr = "#00000" + id
                                } else if (id <= 99) {
                                  idStr = "#0000" + id
                                } else if (id <= 999) {
                                  idStr = "#000" + id
                                }
                                console.log(` first idStr is ${idStr}`);
             addDoc(certificatesCollectionRef, { certificateBundleID:certificateBundleID, id:idStr, level:1, date:currentDate,link:url, fname:newfName, lname:newlName})
             for (let i = 1; i < 5; i++) {
                  id = id + 1
                     if (id <= 9)  {
                     idStr = "#00000" + id
                     } else if (id <= 99) {
                       idStr = "#0000" + id
                     } else if (id <= 999) {
                       idStr = "#000" + id
                     }
                     console.log(` Outer idStr:${idStr}`);
             addDoc(certificatesCollectionRef, { certificateBundleID:certificateBundleID, id:idStr, level:0, date:"",link:"", fname:newfName, lname:newlName})

           }
           })
         })

      }

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
        <input id="fileUpload" type="file" onChange={(event) => { setNewCertificateUpload(event.target.files[0]); }}/>
    </div>
    <div>

    </div>
    <button onClick={handleClick} >Submit</button>
    <button onClick={nukeDatabase} >NUKE</button>
    </div>

  );
}


export default AddProfile;
