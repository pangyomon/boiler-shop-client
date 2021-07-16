import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export interface Banner {
  id: number;
  pageUrl: string;
  imageUrl: string;
  backgroundColor: string;
}

export const fetchBannerList = async (): Promise<Banner[]> => {
  const response = await instance.get<Banner[]>('/api/v1/banner');

  return response.data;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnailUrl: string;
}

export const fetchProductList = async (): Promise<Product[]> => {
  const response = await instance.get<Product[]>('/api/v1/product');

  return response.data;
};

export interface ProductDetailImage {
  id: number;
  imageUrl: string
}

export interface ProductDetail extends Product {
  description: string;
  productImageList: Array<ProductDetailImage>;
}

export const fetchProductDetail = async (id: number): Promise<ProductDetail> => {
  const response = await instance.get<ProductDetail>(`/api/v1/product/${id}`);

  return response.data;
};

export default instance;
