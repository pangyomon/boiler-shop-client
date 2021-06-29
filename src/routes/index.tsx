import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import NotFoundPage from '../views/NotFoundPage';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={HomePage} exact={true} />
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
