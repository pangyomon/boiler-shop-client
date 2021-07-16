import React from 'react';
import { ProductState } from '../../../modules/product';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import styled from '@emotion/styled';
import ResponsiveBox from '../../common/box/ResponsiveBox';
import ProductDetailInfo from './ProductDetailInfo';
import { up } from 'styled-breakpoints';

const ProductInfo = () => {
  const {
    data: {
      title,
      description,
      price,
      thumbnailUrl
    },
  }: ProductState = useSelector((state: RootState) => state.product);

  return (
    <ProductInfoBox>
      <ProductDetailThumbnail src={thumbnailUrl}/>
      <ProductDetailInfo title={title} description={description} price={price}/>
    </ProductInfoBox>
  );
};

const ProductInfoBox = styled(ResponsiveBox)`
  margin-bottom: 2rem;
  
  ${up('md')} {
    display: flex;
  }
`;

const ProductDetailThumbnail = styled.img`
  display: block;
  width: 100%;
  height: auto;
  
  ${up('md')} {
    width: 50%;
  }
`;


export default ProductInfo;
