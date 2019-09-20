import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alice from './components/Alice';


const Routes = () => (
  <Switch>
    <Route path='/Alice' component={ Alice } />

  </Switch>
);

export default Routes;
