import React from 'react';
import ProductList from '../components/product/ProductList';
import { Helmet } from 'react-helmet-async';
import ProductCategory from '../components/product/ProductCategory';

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>
          제품 | Shop
        </title>
      </Helmet>
      <ProductCategory/>
      <ProductList />
    </>
  );
};

export default ProductPage;
