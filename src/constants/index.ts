import { PageTextProps } from '@/types/pageTextProps';

const LENGTH_PAGINATION = 3;

const AMOUNT_SLIDER_ARTS = 12;

const REQUEST_DELAY = 1000;

const GALLERY_START_INDEX = 13;
const GALLERY_END_INDEX = 22;

const BREAKPOINTS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const FILTERS = ['No Sort', 'Sort by Title', 'Sort by Artist'];

const PAGE_TEXT: PageTextProps = {
  main: {
    topText: 'Topics for you',
    underText: 'Our special gallery',
  },
  mainSecond: {
    topText: 'Here some more',
    underText: 'Other works for you',
  },
  favorites: {
    topText: 'Saved by you',
    underText: 'Your favorites list',
  },
};

const LINK_PATH = {
  HOME: '/',
  DETAILS: '/details/:id',
  FAVORITES: '/favorites',
};

export {
  PAGE_TEXT,
  BREAKPOINTS,
  FILTERS,
  LENGTH_PAGINATION,
  AMOUNT_SLIDER_ARTS,
  LINK_PATH,
  REQUEST_DELAY,
  GALLERY_START_INDEX,
  GALLERY_END_INDEX,
};
