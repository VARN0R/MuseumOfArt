import axios from 'axios';
import { useState } from 'react';

import HomeProps from '@/types/homePages';

import Footer from '@components/Footer';
import Gallery from '@components/Gallery';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import SearchedCarts from '@components/SearchedCarts';
import Slider from '@components/Slider';
import Title from '@components/Title';

const Home: React.FC<HomeProps> = ({ arts }) => {
  const [searchedArtworksId, setSearchedArtworksId] = useState<number[]>([]);

  const handleSearch = async (values: any) => {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks/search?q=${values.query}`
    );
    if (response.data.data.length > 0) {
      setSearchedArtworksId(response.data.data.map((item: any) => item.id));
    } else {
      setSearchedArtworksId([404]);
    }
  };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <SearchedCarts artsId={searchedArtworksId}></SearchedCarts>
      <Slider arts={arts}></Slider>
      <Gallery arts={arts}></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
