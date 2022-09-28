import './App.css';
import Profile from './Profile.jsx'
import { useState, useEffect } from "react";
import { db } from './firebase.js'
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
  getDownloadURL,
  list,
  listAll,
} from "firebase/storage";
import { storage } from "./firebase";
import { v1 } from "uuid";
import collect from 'collect.js';

function App() {

const [users, setUsers] = useState([])
const profilesCollectionRef = collection(db,"profiles")


const [profiles, setProfiles] = useState([]);
const [newName, setNewName] = useState("")
const [newfName, setNewfName] = useState("")
const [newlName, setNewlName] = useState("")
const [id, setNewid] = useState("")
const [bundleId, setNewBundleId] = useState("")

const createProfile = async () => {
  console.log("profile created, \n profile count is : /${profiles.}");
  addDoc(profilesCollectionRef, { certificateBundleID: v1() ,fname:newfName ,lname:newlName,name:newName })
}


useEffect(() => {
  console.log(profiles,1);
getDocs(profilesCollectionRef).then((response) => {
  response.docs.forEach((profile) => {
    profiles.push(profile)
  });
  console.log(profiles, 2);
  setProfiles(profiles)
});

}, []);



  return (
    <div className="App">
      <header className="App-header">
      <h3>Add Profile</h3>
<Profile fname="Alan" lname="Man"/>
      </header>
    </div>
  );
}

export default App;


/*
<form>
  <div>
    <label htmlFor="fname">First Name  </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label htmlFor="lname">Last Name  </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <button type="submit">Upload Certificate</button>
    <input id="uploadIndicator" type="checkbox" />
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>
*/
