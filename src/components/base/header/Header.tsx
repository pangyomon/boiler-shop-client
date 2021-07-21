import React, { useCallback, useState } from 'react';
import HeaderNavMenu from './HeaderNavMenu';
import ResponsiveBox from '../../common/box/ResponsiveBox';
import styled from '@emotion/styled';
import HeaderLogo from './HeaderLogo';
import HeaderSubMenu from './HeaderSubMenu';
import oc from 'open-color';
import { up } from 'styled-breakpoints';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <HeaderBox>
      <HeaderLogo />
      <HeaderHamburger onClick={onOpenClick} />
      <HeaderNavMenu open={open} />
      <HeaderSubMenu />
    </HeaderBox>
  );
};

const HeaderBox = styled(ResponsiveBox)`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
`.withComponent('header');

const HeaderHamburger = styled.button`
  order: 0;
  width: 1.5rem;
  height: 1.5rem;

  background-color: ${oc.black};

  ${up('md')} {
    display: none;
  }
`;

export default Header;
