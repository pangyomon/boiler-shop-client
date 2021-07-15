import styled from '@emotion/styled';
import oc from 'open-color';
import { css } from '@emotion/react';

export interface ButtonProps {
  color?: 'primary' | 'danger' | 'success';
  fullWidth?: boolean;
}

const colorStyle = (props: ButtonProps) => css`
  ${props.color === 'primary' && css`
    border: none;
    background-color: ${oc.indigo[5]};
    color: ${oc.white};

    &:active {
      background-color: ${oc.indigo[4]};
    }
  `};

  ${props.color === 'success' && css`
    border: none;
    background-color: ${oc.green[5]};
    color: ${oc.white};

    &:disabled {
      background-color: ${oc.green[6]};
    }

    &:hover {
      background-color: ${oc.green[4]};
    }
  `};

  ${props.color === 'danger' && css`
    border: none;
    background-color: ${oc.red[6]};
    color: ${oc.white};

    &:disabled {
      background-color: ${oc.red[7]};
    }

    &:hover {
      background-color: ${oc.red[5]};
    }
  `};
`;

const widthStyle = (props: ButtonProps) => css`
  ${props.fullWidth && css`
    width: 100%;
    padding: 1rem;
  `};
`;


const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0.75rem;

  background-color: ${oc.black};
  color: ${oc.white};

  transition: background-color 250ms ease-in-out,
  color 250ms ease-in-out;

  ${colorStyle};
  ${widthStyle};

  &:disabled {
    cursor: no-drop;
    color: ${oc.gray[5]};
    border: 1px solid ${oc.gray[5]};
    background-color: ${oc.gray[2]};
  }
`;

export default Button;
