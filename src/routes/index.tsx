import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import NotFoundPage from '../views/NotFoundPage';
import Header from '../components/header/Header';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={HomePage} exact={true} />
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
