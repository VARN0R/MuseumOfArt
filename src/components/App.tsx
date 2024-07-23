import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';
import axios from 'axios';
import Art from '../types/Art';

function App() {
  const [arts, setArts] = useState<Art[]>([]);
  useEffect(() => {
    const fetchArtworks = async () => {
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
    };

    fetchArtworks();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home arts={arts} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites arts={arts} />} />
      </Routes>
    </Router>
  );
}

export default App;
