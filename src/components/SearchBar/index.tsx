import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';

import loadingGif from '@assets/gif/loading.gif';
import images from '@assets/images';
import Container from '@components/Container/styles';
import { REQUEST_DELAY } from '@constants/index';
import { validateSearchBar } from '@helpers/validationSchema';
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

  const validationSchema = validateSearchBar();
  const debouncedQuery = useDebounce(query, REQUEST_DELAY);

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
