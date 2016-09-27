import React from  'react';
import {
  hashHistory,
  // IndexRoute,
  Router,
  Route} from 'react-router';
import App from '../App.js'
import NewComponent from '../components/NewComponent'


export default const routes = (
  <Router >
    <Route path='/' component={App} >
      <Route path='app' component={NewComponent} />
    </Route>
  </Router>
)
console.log(routes);
