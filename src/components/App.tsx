import React from 'react';
import { Global } from '@emotion/react';
import RootRouter from '../routes';
import 'reset-css';
import resetStyle from '../common/Reset';

const App = () => {
  return (
    <>
      <Global styles={resetStyle} />
      <RootRouter />
    </>
  );
};

export default App;
