import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@components/ErrorBoundary';
import { LINK_PATH } from '@constants/index';
import Details from '@pages/Details';
import Favorites from '@pages/Favorites';
import Home from '@pages/Home';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={LINK_PATH.HOME} element={<Home />} />
          <Route path={LINK_PATH.DETAILS} element={<Details />} />
          <Route path={LINK_PATH.FAVORITES} element={<Favorites />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
