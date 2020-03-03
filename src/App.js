import React from 'react';
import './App.css';


import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Room from './pages/Room'
import Error from './pages/Error'
import NavBar from './components/Navbar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div>
<Router>
  <NavBar />
<Switch>
          <Route exact path="/rooms/:slug">
             <SingleRoom />
          </Route>
          <Route exact path="/rooms/">
             <Room />
          </Route>
          <Route exact path="/">
             <Home />
          </Route>
          <Route>
            <Error />
          </Route>
  </Switch>
   </Router>
    </div>
  );
}

export default App;
