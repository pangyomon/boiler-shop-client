import React from 'react';
import styled from '@emotion/styled';


interface BannerItemProps {
  imageUrl: string
}

const BannerItem = ({ imageUrl }: BannerItemProps) => {
  return (
    <BannerItemBox>
      <BannerItemImage src={imageUrl} />
    </BannerItemBox>
  );
};

const BannerItemBox = styled.div`
  max-height: 500px;
  overflow: hidden;
`;

const BannerItemImage = styled.img`
  width: 100%;
`;

export default BannerItem;
