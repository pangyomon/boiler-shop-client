import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from '../../../assets/img/Logo.svg';

const HeaderLogo = () => {
  return (
    <HeaderLogoLink to={'/'}>
      <img src={Logo} alt={'Logo'}/>
    </HeaderLogoLink>
  );
};

const HeaderLogoLink = styled(Link)`
  display: block;
  order: 1;
`;

export default HeaderLogo;
