import './App.css';
import Profile from './Profile.jsx'

function App() {
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
