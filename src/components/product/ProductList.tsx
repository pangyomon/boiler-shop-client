import React from 'react';
import { Product } from '../../api';
import ProductItem from './ProductItem';
import styled from '@emotion/styled';
import { up } from 'styled-breakpoints';

interface ProductListProps {
  productList: Product[];
}

const ProductList = ({ productList }: ProductListProps) => {
  return (
    <ProductListBox>
      {
        productList.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
            />
          );
        })
      }
    </ProductListBox>
  );
};

const ProductListBox = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, auto);

  ${up('md')} {
    grid-template-columns: repeat(3, auto);
    grid-gap: 1rem;
  }

  ${up('lg')} {
    grid-template-columns: repeat(4, auto);
    grid-gap: 1.5rem;
  }
`;

export default ProductList;
