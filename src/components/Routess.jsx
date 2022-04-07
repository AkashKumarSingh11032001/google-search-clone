import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Results from './Results';


const Routess = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/image">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/video">
        <Results />
      </Route>

    </Switch>
  );
}

export default Routess;
