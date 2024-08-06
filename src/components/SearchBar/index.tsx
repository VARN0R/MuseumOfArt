import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import loadingGif from '@assets/gif/loading.gif';
import images from '@assets/images';
import Container from '@components/Container/styles';
import useDebounce from '@hooks/useDebounce';

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
  const [query, setQuery] = useState('');

  const validationSchema = Yup.object({
    query: Yup.string().matches(
      /^[a-zA-Z\s]*$/,
      'Search query cannot contain only numbers or special characters'
    ),
  });
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedQuery) {
        setIsLoading(true);
        try {
          await onSubmit({ query: debouncedQuery });
        } catch (error) {
          console.error('Error submitting search query:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <Container>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.query !== query) {
            setQuery(values.query);
          }
        }}
      >
        {({ setFieldValue }) => (
          <FormStyled>
            <FieldStyled
              name="query"
              type="text"
              placeholder="Search Art, Artist, Work..."
              value={query}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => {
                setQuery(e.target.value);
                setFieldValue('query', e.target.value);
              }}
            />
            <ErrorMessageStyled name="query" component="div" />
            <ButtonStyled type="submit">
              <img src={images.searchIcon} alt="search icon" />
            </ButtonStyled>
            {isLoading && <LoadingStyled src={loadingGif} alt="loading" />}
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default SearchBar;
