import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ Component }: any) => (
  <Route
    render={() => (localStorage.getItem('authenticated') ? (
      <Component />
    ) : (
      <Redirect to="/login/student" />
    ))
    }
  />
);
export default PrivateRoute;
