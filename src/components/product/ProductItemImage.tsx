import React from 'react';
import styled from '@emotion/styled';
import { up } from 'styled-breakpoints';

interface ProductItemImageProps {
  title: string
  imageUrl: string;
}

const ProductItemImage = ({title, imageUrl}: ProductItemImageProps) => {
  return (
    <ProductImageBox>
      <ProductImageContent src={imageUrl} alt={title}/>
    </ProductImageBox>
  );
};

const ProductImageBox = styled.figure`
  display: block;
  width: 100%;
  //height: 20rem;
  height: auto;
  margin-bottom: 0.3rem;
  overflow: hidden;

  ${up('md')} {
    //height: 30rem;
  }
`;

const ProductImageContent = styled.img`
  position: relative;
  
  width: 100%;
  height: 100%;
  
  transition: 300ms ease-in-out;

  object-fit: cover;

  &:hover {
    transform: scale(1.3);
  }
`

export default ProductItemImage;
