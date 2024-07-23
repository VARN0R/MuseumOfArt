import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { debounce } from 'lodash';
import Container from './Container';

const ButtonStyled = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const FormStyled = styled(Form)`
  position: relative;
  width: 762px;
  margin: 72px auto 0 auto;

  @media (max-width: 768px) {
    margin-top: 36px;
    width: 100%;
  }
`;

const FieldStyled = styled(Field)`
  border-radius: 16px;
  padding: 16px;
  width: 762px;
  height: 64px;
  background: rgba(57, 57, 57, 0.05);
  border: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

const SearchBar: React.FC<{ onSubmit: (values: any) => void }> = ({
  onSubmit,
}) => {
  const validationSchema = Yup.object({
    query: Yup.string().required('Search query is required'),
  });

  const debouncedSubmit = debounce(onSubmit, 3000);

  return (
    <Container>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={validationSchema}
        onSubmit={debouncedSubmit}
      >
        <FormStyled>
          <FieldStyled
            name="query"
            type="text"
            placeholder="Search Art, Artist, Work..."
          />
          <ErrorMessageStyled name="query" component="div" />
          <ButtonStyled type="submit">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
                stroke="#393939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 28L22 22"
                stroke="#393939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ButtonStyled>
        </FormStyled>
      </Formik>
    </Container>
  );
};

export default SearchBar;
