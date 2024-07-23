import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { debounce } from 'lodash';
import Container from './Container';
import searchIcon from '../assets/img/searchIcon.svg';
import loadingGif from '../assets/gif/loading.gif';

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

const LoadingStyled = styled.img`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 24px;
  height: 24px;
`;

const SearchBar: React.FC<{ onSubmit: (values: any) => void }> = ({
  onSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    query: Yup.string().required('Search query is required'),
  });

  const debouncedSubmit = debounce(async (values: any) => {
    setIsLoading(true);
    await onSubmit(values);
    setIsLoading(false);
  }, 1000);

  return (
    <Container>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={validationSchema}
        onSubmit={debouncedSubmit}
      >
        {() => (
          <FormStyled>
            <FieldStyled
              name="query"
              type="text"
              placeholder="Search Art, Artist, Work..."
            />
            <ErrorMessageStyled name="query" component="div" />
            <ButtonStyled type="submit">
              <img src={searchIcon} alt="search icon" />
            </ButtonStyled>
            {isLoading && <LoadingStyled src={loadingGif} alt="loading" />}
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default SearchBar;
