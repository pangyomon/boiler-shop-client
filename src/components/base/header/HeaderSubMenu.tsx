import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdShoppingCart } from 'react-icons/md';

const HeaderSubMenu = () => {
  return (
    <CartLink to={'/cart'}>
      <MdShoppingCart size={20} />
    </CartLink>
  );
};


const CartLink = styled(NavLink)`
  display: block;
  font-size: 1.5rem;
  order: 2;
`;

export default HeaderSubMenu;
