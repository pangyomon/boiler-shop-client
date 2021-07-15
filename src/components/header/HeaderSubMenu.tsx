import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../common/button/Button';

const HeaderSubMenu = () => {
  return (
    <HeaderSubMenuBox>
      <LoginLink to={'/login'}>
        로그인
      </LoginLink>
    </HeaderSubMenuBox>
  );
};

const HeaderSubMenuBox = styled.div`
`;

const LoginLink = styled(Button)`

`.withComponent(Link);

export default HeaderSubMenu;
