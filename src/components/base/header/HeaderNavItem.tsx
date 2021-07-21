import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import oc from 'open-color';
import { up } from 'styled-breakpoints';

interface HeaderNavItemProps {
  to: string;
  text: any;
}

const HeaderNavItem = ({ to, text }: PropsWithChildren<HeaderNavItemProps>) => {
  return (
    <HeaderNavItemBox>
      <HeaderNavItemLink to={to}>
        {text}
      </HeaderNavItemLink>
    </HeaderNavItemBox>
  );
};

const HeaderNavItemBox = styled.li`
  
`;

const HeaderNavItemLink = styled(NavLink)`
  display: block;
  
  padding: 1rem;
  
  border: 1px solid ${oc.black};
  
  color: ${oc.black};
  
  &.active {
    color: ${oc.black};
    font-weight: 700;
  }
  
  ${up('md')} {
    border: none;
  }
`;

export default HeaderNavItem;
