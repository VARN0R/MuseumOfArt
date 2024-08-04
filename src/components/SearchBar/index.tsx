import { Formik } from 'formik';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import * as Yup from 'yup';

import loadingGif from '@assets/gif/loading.gif';
import searchIcon from '@assets/img/searchIcon.svg';

import Container from '@components/Container/styles';
import {
  ButtonStyled,
  ErrorMessageStyled,
  FieldStyled,
  FormStyled,
  LoadingStyled,
} from './styles';

const SearchBar: React.FC<{ onSubmit: (values: any) => void }> = ({
  onSubmit,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    query: Yup.string()
      .required('Search query is required')
      .matches(
        /^[a-zA-Z\s]*$/,
        'Search query cannot contain only numbers or special characters'
      ),
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
