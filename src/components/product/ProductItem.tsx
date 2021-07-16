import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../api';
import styled from '@emotion/styled';
import oc from 'open-color';
import { up } from 'styled-breakpoints';
import ProductItemImage from './ProductItemImage';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductItemBox>
      <Link to={`/product/${product.id}`}>
        <ProductItemImage
          title={product.title}
          imageUrl={product.thumbnailUrl}
        />
        <ProductItemTitle>
          {product.title}
        </ProductItemTitle>
        <ProductItemPrice>
          {new Intl.NumberFormat().format(product.price)}원
        </ProductItemPrice>
      </Link>
    </ProductItemBox>
  );
};

const ProductItemBox = styled.li`
  width: 100%;
  overflow: hidden;
`;

const ProductItemTitle = styled.span`
  display: block;
  margin-bottom: 0.3rem;
  color: ${oc.gray[6]};

  // ${up('md')} {
  //   font-size: 1.5rem;
  // }
`;

const ProductItemPrice = styled.strong`
  font-weight: 700;

  // ${up('md')} {
  //   font-size: 1.2rem;
  // }
`;

export default ProductItem;
