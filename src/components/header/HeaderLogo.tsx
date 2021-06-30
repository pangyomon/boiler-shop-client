import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderLogo = () => {
  return (
    <HeaderLogoLink to={'/'}>
      <h1>
        LOGO
      </h1>
    </HeaderLogoLink>
  );
};

const HeaderLogoLink = styled(Link)`
  display: block;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export default HeaderLogo;
