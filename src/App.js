import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>First Name</h3>
      <form>
      <input name="fName" placeholder="First Name"/>
      <input name="lName" placeholder="Last Name"/>
      </form>
      <button>Submit</button>
      </header>
    </div>
  );
}

export default App;
