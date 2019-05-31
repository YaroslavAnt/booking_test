import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.scss';
import './styles/index.scss'
// import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import Hall from './pages/Hall/Hall';
import Statistics from './pages/Statistics/Statistics';
import SignIn from './pages/SignIn/SignIn';

function App() {
  let routes = (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/hall/:hall_id" component={Hall} />
      <Route path="/statistics" component={Statistics} />
    </Switch>
  )
  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
