import React, { Component } from 'react';
// import {Link} from 'react-router';
// import AppBar from 'material-ui/AppBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from './containers/NavBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar
            menu={this.props.route.childRoutes}
            location={this.props.location}
            params={this.props.params}
          />
          <div className="App" style={{margin:'30px',padding:'30px'}}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
