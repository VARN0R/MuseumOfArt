import * as Yup from 'yup';

export const validateSearchBar = () => {
  return Yup.object({
    query: Yup.string().matches(
      /^[a-zA-Z\s]*$/,
      'Search query cannot contain only numbers or special characters'
    ),
  });
};
