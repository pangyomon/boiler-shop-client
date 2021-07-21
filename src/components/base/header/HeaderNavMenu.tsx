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
  
  width: 100%;
  height: calc(100vh - 44px);
  
  background-color: ${oc.black};

  ${up('md')} {
    position: static;
    
    display: block;
    
    width: auto;
    height: auto;

    transition: none;
    
    background-color: transparent;
    
    order: 2;
  }
`;

export default HeaderNavMenu;
