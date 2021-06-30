import React from 'react';
import HeaderNavMenu from './HeaderNavMenu';
import ResponsiveBox from '../box/ResponsiveBox';
import styled from '@emotion/styled';
import HeaderLogo from './HeaderLogo';
import HeaderSubMenu from './HeaderSubMenu';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo />
      <HeaderNavMenu />
      <HeaderSubMenu />
    </HeaderBox>
  );
};

const HeaderBox = styled(ResponsiveBox)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`.withComponent('header');

export default Header;
