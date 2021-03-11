import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { store } from './store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Form from './components/form.js';
import Errors from './components/error.js';
import Congratulations from './components/congratulations.js';


ReactDOM.render(
  <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/congratulations" component={Congratulations} />
            {/* <Congratulations />
          </Route> */}
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/blog">
            <App />
          </Route>
          <Route path="/errors">
            <Errors />
          </Route>
        </Switch>
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
