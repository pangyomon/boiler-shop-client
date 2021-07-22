import React from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';
import ResponsiveBox from '../../common/box/ResponsiveBox';

const Footer = () => {
  return (
    <FooterBox>
      <FooterTitle>
        © 2021 Shopify Wireframe for Figma By Adveits
      </FooterTitle>
    </FooterBox>
  );
};

const FooterBox = styled(ResponsiveBox)`
  width: 100%;
  padding: 1rem;
  
  background-color: ${oc.gray[1]};
`.withComponent('footer');

const FooterTitle = styled.h2`
  font-weight: 700;
`;

export default Footer;
