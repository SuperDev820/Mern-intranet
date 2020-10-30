import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
// import history from './history';

// import RequireAuth from './RequireAuth'
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <RequireAuth> */}
          <Routes />
        {/* </RequireAuth> */}
      </Router>
    );
  }
}
