import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import {RequireAuth} from './RequireAuth'

import { 
  default as SignInView
} from './views/Auth/SingIn/SignIn';

import { 
  default as SignUpView
} from './views/Auth/SignUp/SignUp';

import {
  default as Home
} from './views/Home/Home'
// import {
//   Dashboard as DashboardView,
//   Groups as GroupsView,
//   JoinGroup as JoinGroupView
// } from './views/main';

const Routes = () => {
  return (
    <Switch>
      <Route component={SignUpView} path="/register" />
      <Route component={SignInView} path="/login" />
      <Route exact path="/">
        <SignInView />
      </Route>
      <Route exact path="/dashboard">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;