import React from 'react';
import styled from '@emotion/styled';
import HeaderNavItem from './HeaderNavItem';
import { up } from 'styled-breakpoints';
import oc from 'open-color';

interface HeaderNavMenuProps {
  open: boolean;
}

const HeaderNavMenu = ({ open }: HeaderNavMenuProps) => {
  return (
    <HeaderNavMenuBox open={open}>
      <HeaderNavItem to={'/product'} text={'제품'} />
    </HeaderNavMenuBox>
  );
};


const HeaderNavMenuBox = styled.ul<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: ${props => props.open ? '0' : '-999px'};
  z-index: 2;
  
  transition: left 500ms ease-in-out;
  
   // display: ${props => props.open ? 'block' : 'none'};

  width: 100%;
  height: calc(100vh - 44px);
  
  background-color: ${oc.black};

  ${up('md')} {
    position: static;
    
    display: block;
    left: 0;

    transition: none;
    
    width: auto;
    height: auto;
    
    order: 2;
  }
`;

export default HeaderNavMenu;
