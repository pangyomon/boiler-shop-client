import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailThunk } from '../modules/thunk';
import ProductDetailImageList from '../components/product/detail/ProductDetailImageList';
import { RootState } from '../modules';
import NotFoundPage from './NotFoundPage';
import NotFoundError from '../components/error/NotFoundError';
import ProducInfo from '../components/product/detail/ProducInfo';

interface MatchParams {
  id: string;
}

const ProductDetailPage = () => {
  const match = useRouteMatch<MatchParams>();
  const { error } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    const productId = match.params.id;

    dispatch(getProductDetailThunk((Number.parseInt(productId))));
  }, []);

  if (error) {
    return (
      <NotFoundError />
    );
  }

  return (
    <div style={{padding: '1rem'}}>
      <ProducInfo />
      <ProductDetailImageList />
    </div>
  );
};

export default ProductDetailPage;
