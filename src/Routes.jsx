import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alice from './components/Alice';
import Pooh from './components/Pooh';


const Routes = () => (
  <Switch>
    <Route path='/Alice' component={ Alice } />
    <Route path='/Pooh' component={ Pooh } />

  </Switch>
);

export default Routes;
