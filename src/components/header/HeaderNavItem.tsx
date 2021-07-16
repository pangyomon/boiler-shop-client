import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import oc from 'open-color';

interface HeaderNavItemProps {
  to: string;
  text: any;
  exact?: boolean;
}

const HeaderNavItem = ({ to, text, exact = true }: PropsWithChildren<HeaderNavItemProps>) => {
  return (
    <li>
      <NavItemLink to={to} exact={exact}>
        {text}
      </NavItemLink>
    </li>
  );
};

const NavItemLink = styled(NavLink)`
  display: block;

  padding: 1rem;

  color: ${oc.gray[5]};

  &.active {
    color: ${oc.black};
    font-weight: 700;
  }
`;

export default HeaderNavItem;
