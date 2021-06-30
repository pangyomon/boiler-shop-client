import styled from '@emotion/styled';
import { up } from 'styled-breakpoints';

const ResponsiveBox = styled.div`
  width: 100%;

  ${up('sm')} {
    max-width: 640px;
  }

  ${up('md')} {
    max-width: 768px;
  }

  ${up('lg')} {
    max-width: 1024px;
  }

  ${up('xl')} {
    max-width: 1280px;
  }

  ${up('xxl')} {
    max-width: 1536px;
  }

  margin-left: auto;
  margin-right: auto;
`;

export default ResponsiveBox;
