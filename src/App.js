import './App.css';
import AddProfile from './AddProfile.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';


function App() {

  return (
    <Router>
    <Header/>
      <Switch>
            <Route exact path="/">
                <div className="App">
                  <header className="App-header">
                    <h3>Add Profile</h3>
                      <AddProfile/>
                    </header>
                </div>
            </Route>

            <Route path="/login">

            </Route>
            <Route path="/sign-up">

            </Route>

            <Route path="/search">

            </Route>

            <Route path="/search/:id">

            </Route>

            <Route path="/admin-dashboard">

            </Route>

      </Switch>
    </Router>
  );
}

export default App;
