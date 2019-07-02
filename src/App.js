import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import DevTools from 'mobx-react-devtools';

import './App.scss';
import './styles/index.scss'
import Dashboard from './pages/Dashboard/Dashboard';


import HallsStore from './mobx/Halls';
import TicketsStore from './mobx/Tickets';
import Hall from './pages/Hall/Hall';
import AuthStore from './mobx/Auth';
import SignIn from './pages/SignIn/SignIn';

const hallsStore = new HallsStore();
const ticketsStore = new TicketsStore();
const authStore = new AuthStore();

class App extends React.Component {
  render() {
    console.log(hallsStore)
    console.log(ticketsStore)
    return (
      <Provider hallsStore={hallsStore} ticketsStore={ticketsStore} authStore={authStore}>
        <div>
          {/* <DevTools /> */}
          <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/* <Route path="/sign-up" component={SignUp} /> */}
              <Route path="/sign-in" component={SignIn} />
              <Route path="/hall/:hall_id" component={Hall} />
              {/* <Route path="/statistics" component={Statistics} /> */}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
