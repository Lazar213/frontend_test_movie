import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Search from 'containers/Search';

function Routes() {
  return (
    <Switch>
      <Route exact path="/search" component={Search} />

      <Redirect to="/search" />
    </Switch>
  );
}

export default Routes;
