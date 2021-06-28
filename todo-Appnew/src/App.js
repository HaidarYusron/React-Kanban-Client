import React from 'react'
import Login from './container/Login'
import Home from './container/Home'

import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component= {Login}/>
        <Route exact path="/home" component= {Home}/>
       
      </Switch>
     
    </div>
  );
}


export default App;
