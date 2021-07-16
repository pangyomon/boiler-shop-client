import React, { useEffect, useState } from 'react';
import { fetchProductList, Product } from '../../api';
import ProductItem from './ProductItem';
import styled from '@emotion/styled';
import ResponsiveBox from '../common/box/ResponsiveBox';
import { up } from 'styled-breakpoints';


const ProductList = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getProductList = async () => {
      try {
        setProductList(await fetchProductList());
      } catch (e) {
        console.error(e);
      }
    }

    getProductList();
  }, []);

  return (
    <ProductListBox>
      {
        productList.map((product: Product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
            />
          )
        })
      }
    </ProductListBox>
  );
};

const ProductListBox = styled(ResponsiveBox)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  max-width: 1280px !important;

  ${up('sm')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  
  ${up('lg')} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }
  
  ${up('xl')} {
    grid-template-columns: repeat(4, 1fr);
  }
  
  width: 100%;
  padding: 1rem;
`.withComponent('ul');



export default ProductList;
