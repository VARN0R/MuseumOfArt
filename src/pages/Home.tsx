import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import axios from 'axios';
import Subtitle from '../components/Subtitle';

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  console.log(artworks);

  const handleSearch = async (values: any) => {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${values.query}`
    );

    setArtworks(response.data.data);
  };

  const subtitleProps = {
    topText: 'Topics for you',
    underText: 'Our special gallery',
  };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <Subtitle {...subtitleProps}></Subtitle>
    </div>
  );
};

export default Home;
