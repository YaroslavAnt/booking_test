import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from "./redux/reducers/auth";
import roomReducer from "./redux/reducers/halls";
import ticketsReducer from "./redux/reducers/tickets";


const rootReducer = combineReducers({
  auth: authReducer,
  halls: roomReducer,
  tickets: ticketsReducer,
  form: formReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();