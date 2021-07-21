import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

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
