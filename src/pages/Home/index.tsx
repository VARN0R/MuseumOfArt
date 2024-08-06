import axios from 'axios';
import { useState } from 'react';

import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import Slider from '@components/Slider';
import Title from '@components/Title';
import SearchValues from '@/types/searchValues';

const Home = () => {
  const [query, setQuery] = useState<string>('');
  const handleSearch = async (values: SearchValues) => {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${values.query}`
    );
    if (response.data.data.length > 0) {
      setQuery(
        `https://api.artic.edu/api/v1/artworks/search?q=${values.query}`
      );
    } else {
      setQuery(`not found`);
    }
  };
  return (
    <div>
      <Header />
      <Title />
      <SearchBar onSubmit={handleSearch} />

      <Slider query={query} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
