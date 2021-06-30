import React from 'react';
import styled from '@emotion/styled';
import HeaderNavItem from './HeaderNavItem';

const HeaderNavMenu = () => {
  return (
    <NavBox>
      <NavBoxList>
        <HeaderNavItem to={'/product'} text={'제품'}/>
      </NavBoxList>
    </NavBox>
  );
};

const NavBox = styled.nav`
  
`;

const NavBoxList = styled.ul`
  display: flex;
`;

export default HeaderNavMenu;
