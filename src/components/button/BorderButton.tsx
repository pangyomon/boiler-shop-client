import styled from '@emotion/styled';
import Button, { ButtonProps } from './Button';
import { css } from '@emotion/react';
import oc from 'open-color';

const outlineStyle = (props: ButtonProps) => css`
  border: 1px solid ${oc.black};
  background-color: ${oc.white};
  color: ${oc.black};

  ${props.color === 'primary' && css`
    &:hover {
      border: 1px solid ${oc.indigo[5]};
      color: ${oc.indigo[5]};
    }
  `};

  ${props.color === 'success' && css`
    &:hover {
      border: 1px solid ${oc.green[5]};
      color: ${oc.green[5]};
    }
  `};

  ${props.color === 'danger' && css`
    &:hover {
      border: 1px solid ${oc.red[6]};
      color: ${oc.red[6]};
    }
  `}
`;


const BorderButton = styled(Button)`
  ${outlineStyle};
`;

export default BorderButton;
