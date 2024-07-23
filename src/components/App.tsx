import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';
import axios from 'axios';
import Art from '../types/Art';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Ой</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Попробовать снова</button>
    </div>
  );
};

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
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route path="/" element={<Home arts={arts} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites arts={arts} />} />
        </Routes>
      </Router>
    </ReactErrorBoundary>
  );
}

export default App;
