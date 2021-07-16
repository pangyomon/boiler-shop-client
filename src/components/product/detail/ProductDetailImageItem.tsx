import React from 'react';
import styled from '@emotion/styled';

interface ProductDetailImageItemProps {
  title?: string;
  imageUrl: string;
}

const ProductDetailImageItem = ({title = 'test', imageUrl}: ProductDetailImageItemProps) => {
  return (
    <ProductDetailImageItemBox>
      <ProductDetailImage src={imageUrl} alt={title}/>
    </ProductDetailImageItemBox>

  );
};

const ProductDetailImageItemBox = styled.li`
  display: flex;
  justify-content: center;
`;

const ProductDetailImage = styled.img`
  width: 30rem;
  height: auto;
`;

export default ProductDetailImageItem;
