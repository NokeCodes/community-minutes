import React from 'react';
import ReactDOM from 'react-dom';
import {
  hashHistory,
  Router,
  Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Members from './containers/Members';
import Meetings from './containers/Meetings';
import Movements from './components/Movements';
import Home from './components/Home';
import App from './App.js';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <Route title='Home Page' path='home' component={Home} />
        <Route title='Members' path='members' component={Members} />
        <Route title='Meetings' path='meetings' component={Meetings} />
        <Route title='Movements' path='movements' component={Movements} />
      </Route>
    </Router>
  , document.getElementById('reactRenderContainer')
);
