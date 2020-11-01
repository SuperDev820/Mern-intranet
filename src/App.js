import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
// import history from './history';

import RequireAuth from './RequireAuth'
import CheckSubdomain from './CheckSubdomain'
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <CheckSubdomain> */}
          {/* <RequireAuth> */}
          <Routes />
          {/* </RequireAuth> */}
        {/* </CheckSubdomain> */}
      </Router>
    );
  }
}
