import { css } from '@emotion/react';

const resetStyle = css`
  * {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  
  #root {
    position: relative;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
  
  button {
    outline: none;
    border: none;
    
    &:hover {
      cursor: pointer;
    }
  }
`;

export default resetStyle;
