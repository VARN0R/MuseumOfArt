import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LINK_PATH } from '@constants/index';
import Art from '@/types/art';

import ErrorBoundary from '@components/ErrorBoundary';
import Details from '@pages/Details';
import Favorites from '@pages/Favorites';
import Home from '@pages/Home';

function App() {
  const [arts, setArts] = useState<Art[]>([]);
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        axios
          .get('https://api.artic.edu/api/v1/artworks', {
            params: {
              page: 1,
              limit: 50,
            },
          })
          .then((response) => {
            const artworks = response.data.data.map((art: any) => ({
              id: art.id,
              title: art.title,
              artist: art.artist_title,
              imageUrl: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
            }));
            setArts(artworks);
          });
      } catch (error) {
        console.error('Error fetching artworks', error);
      }
    };

    fetchArtworks();
  }, []);
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={LINK_PATH.HOME} element={<Home arts={arts} />} />
          <Route path={LINK_PATH.DETAILS} element={<Details />} />
          <Route
            path={LINK_PATH.FAVORITES}
            element={<Favorites arts={arts} />}
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
