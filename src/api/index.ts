import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {

  }
});

export interface Banner {
  id: number;
  pageUrl: string;
  imageUrl: string;
  backgroundColor: string;
}

export const fetchBannerList = async () => {
  const response = await instance.get<Banner[]>('/api/v1/banner');

  return response.data;
};

export default instance;
