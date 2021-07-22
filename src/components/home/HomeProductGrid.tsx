import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ResponsiveBox from '../common/box/ResponsiveBox';
import { fetchNewProductList, Product } from '../../api';
import ProductList from '../product/ProductList';

const HomeProductGrid = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getNewProductList = async () => {
      try {
        setProductList(await fetchNewProductList());
      } catch (e) {
        console.error(e);
      }
    }

    getNewProductList();
  }, []);
  return (
    <HomeProductGridBox>
      <HomeProductGridTitle>
        NEW ITEMS
      </HomeProductGridTitle>
      <HomeProductGridDescription>
        업데이트 되는 신상품을 가장 먼저 만나보세요!
      </HomeProductGridDescription>
      <ProductList productList={productList}/>
    </HomeProductGridBox>
  );
};

const HomeProductGridBox = styled(ResponsiveBox)`
  width: 100%;
  padding: 2rem 0.5rem;
  
`.withComponent('section');

const HomeProductGridTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const HomeProductGridDescription = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export default HomeProductGrid;
