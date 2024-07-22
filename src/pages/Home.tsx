import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import axios from 'axios';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  console.log(artworks);

  const handleSearch = async (values: any) => {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${values.query}`
    );

    setArtworks(response.data.data);
  };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <Slider></Slider>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
