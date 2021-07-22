import React from 'react';
import { Product } from '../../api';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductItemBox>
      <Link to={`/product/${product.id}`}>
        <ProductItemImage src={product.thumbnailUrl} />
        <ProductItemTitle>
          {product.title}
        </ProductItemTitle>
        <ProductItemPrice>
          {product.price.toLocaleString()}원
        </ProductItemPrice>
      </Link>
    </ProductItemBox>
  );
};

const ProductItemBox = styled.li`
  width: 100%;
`;

const ProductItemImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const ProductItemTitle = styled.p`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ProductItemPrice = styled.span`
  
`;

export default ProductItem;
