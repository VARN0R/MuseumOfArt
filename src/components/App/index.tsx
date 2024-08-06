import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@components/ErrorBoundary';
import { LINK_PATH } from '@constants/index';

const Details = lazy(() => import('@pages/Details'));
const Favorites = lazy(() => import('@pages/Favorites'));
const Home = lazy(() => import('@pages/Home'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={LINK_PATH.HOME} element={<Home />} />
            <Route path={LINK_PATH.DETAILS} element={<Details />} />
            <Route path={LINK_PATH.FAVORITES} element={<Favorites />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
