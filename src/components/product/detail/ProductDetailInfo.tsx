import React from 'react';
import styled from '@emotion/styled';
import ProductPay from './ProductPay';

interface ProductDetailInfoProps {
  title: string;
  description: string;
  price: number;
}

const ProductDetailInfo = ({ title, description, price }: ProductDetailInfoProps) => {
  return (
    <ProductDetailInfoBox>
      <ProductTitle>
        {title}
      </ProductTitle>
      <ProductPrice>
        가격: <strong>{price}</strong> 원
      </ProductPrice>
      <ProductPay/>
    </ProductDetailInfoBox>
  );
};

const ProductDetailInfoBox = styled.div`
  padding: 1rem;
`;


const ProductTitle = styled.h1`
  font-size: 2.5rem;
  
  margin-bottom: 1.5rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 2rem;
  strong {
    font-weight: 700;
  }
`;


export default ProductDetailInfo;
