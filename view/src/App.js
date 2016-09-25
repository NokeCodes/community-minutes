import React from 'react';
// import {Link} from 'react-router';
// import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import data from './config/data.js';

import NavBar from './containers/NavBar';

const App = React.createClass({
  getInitialState() {
    return {
      filteredData: data,
    };
  },
  handleSubmit(e) {
    this.filterItems(e);
  },
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar
            menu={this.props.route.childRoutes}
            location={this.props.location}
            params={this.props.params}
          />
          <div className="App" style={{margin:'0 30px 30px 30px',padding:'30px'}}>
              {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
})

export default App;
