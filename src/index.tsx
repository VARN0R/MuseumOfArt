import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/globalStyles';
import { myTheme } from '@styles/myTheme';

import App from '@components/App';

import { FavoritesProvider } from '@helpes/favoritesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ThemeProvider>
  </>
);
