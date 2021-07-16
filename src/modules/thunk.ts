import { Dispatch } from 'redux';
import { fetchProductDetail } from '../api';
import { getProductDetail, getProductDetailFail, getProductDetailSuccess } from './product';

export const getProductDetailThunk = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getProductDetail(id));

  try {
    const productDetail = await fetchProductDetail(id);

    console.log(productDetail);

    dispatch(getProductDetailSuccess(productDetail));
  } catch (e) {
    dispatch(getProductDetailFail(e));
  }
};
