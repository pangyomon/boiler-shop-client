import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { ProductState } from '../../../modules/product';
import ProductDetailImageItem from './ProductDetailImageItem';
import ResponsiveBox from '../../common/box/ResponsiveBox';
import oc from 'open-color'

const ProductDetailImageList = () => {
  const {
    data: {
      title,
      productImageList,
    },
  }: ProductState = useSelector((state: RootState) => state.product);

  // 제품 이미지가 없을 때
  if (!productImageList) {
    return null;
  }

  return (
    <ResponsiveBox as={'section'}>
      <ul style={{padding: '3rem', border: `1px solid ${oc.gray[4]}`}}>
        {
          productImageList.map((productImage, index) => {
            return (
              <ProductDetailImageItem
                key={index}
                title={title}
                imageUrl={productImage.imageUrl}
              />
            );
          })
        }
      </ul>
    </ResponsiveBox>
  );
};

export default ProductDetailImageList;
