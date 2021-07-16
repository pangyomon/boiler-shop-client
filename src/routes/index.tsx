import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import NotFoundPage from '../views/NotFoundPage';
import Header from '../components/header/Header';
import ProductPage from '../views/ProductPage';
import ProductDetailPage from '../views/ProductDetailPage';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} component={HomePage} exact={true} />
        <Route path={'/product'} component={ProductPage} exact={true} />
        <Route path={'/product/:id'} component={ProductDetailPage} exact={true} />
        <Route path={'/404'} component={NotFoundPage} exact={true} />
        <Route path={'*'} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
