import React from 'react';
import styled from '@emotion/styled';
import ResponsiveBox from '../common/box/ResponsiveBox';

const ProductCategory = () => {
  return (
    <ProductCategoryBox>

    </ProductCategoryBox>
  );
};

const ProductCategoryBox = styled(ResponsiveBox)`
  height: 10rem;
  
  padding: 1rem;
`.withComponent(ResponsiveBox)

export default ProductCategory;
