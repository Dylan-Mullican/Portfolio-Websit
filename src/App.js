import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './Resume.css';
import './Home.css';
import './Projects.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {Resume} from './Resume';
import {Navigation} from './Navigation';
import {Projects} from './Projects';
import {Home} from './Home';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Router>
      <header className="App-header">

       <div className="WebTitle">
         Dylan Mullican
       </div>
       

        <div className="Clock">The current time is {currentTime}.</div>
      </header>
      <Navigation/>
      <Switch>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
      </Switch>
    </Router>

    

    
  );
}



export default App;