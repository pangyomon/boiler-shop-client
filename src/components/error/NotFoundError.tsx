import React from 'react';
import { Helmet } from 'react-helmet-async';
import {NavLink} from 'react-router-dom';
import Button from '../common/button/Button';
import styled from '@emotion/styled';

const NotFoundError = () => {
  return (
    <NotFoundErrorBox>
      <Helmet>
        <title>
          404 | Shop
        </title>
      </Helmet>
      <div>
        <h1>
          아무것도 없네요 ㅠ
        </h1>
        <NavLink to={'/'}>
          홈으로 돌아가기
        </NavLink>
      </div>
    </NotFoundErrorBox>
  );
};

const NotFoundErrorBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  
  border: 1px solid #000;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export default NotFoundError;
