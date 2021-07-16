import { ProductDetail } from '../api';
import { AxiosError } from 'axios';

const GET_PRODUCT_DETAIL = 'product/GET_PRODUCT_DETAIL';
const GET_PRODUCT_DETAIL_SUCCESS = 'product/GET_PRODUCT_DETAIL_SUCCESS';
const GET_PRODUCT_DETAIL_FAIL = 'product/GET_PRODUCT_DETAIL_FAIL';

export const getProductDetail = (id: number) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: id,
  };
};

export const getProductDetailSuccess = (productDetail: ProductDetail) => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: productDetail,
  };
};

export const getProductDetailFail = (error: AxiosError) => {
  return {
    type: GET_PRODUCT_DETAIL_FAIL,
    payload: error.message,
  };
};


export interface ProductState {
  loading: boolean,
  data: ProductDetail,
  error: Error | null,
}

type ProductAction = ReturnType<typeof getProductDetail> |
  ReturnType<typeof getProductDetailSuccess> |
  ReturnType<typeof getProductDetailFail>;

const initialState: ProductState = {
  loading: false,
  data: {} as ProductDetail,
  error: null,
};

const productReducer = (state = initialState, action: ProductAction) => {
  console.log(action.type);
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        loading: true,
        error: null,
        data: {} as ProductDetail,
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      console.log(1);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        data: {} as ProductDetail,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
