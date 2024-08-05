import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import { BREAKPOINTS } from '@constants/index';

export const ButtonStyled = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const FormStyled = styled(Form)`
  position: relative;
  width: 762px;
  margin: 72px auto 0 auto;

  @media (max-width: ${BREAKPOINTS.md}) {
    margin-top: 36px;
    width: 100%;
  }
`;

export const FieldStyled = styled(Field)`
  border-radius: 16px;
  padding: 16px;
  width: 762px;
  height: 64px;
  background: rgba(57, 57, 57, 0.05);
  border: none;

  @media (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const LoadingStyled = styled.img`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 24px;
  height: 24px;
`;
