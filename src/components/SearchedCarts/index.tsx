import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ArtSearched from '@/types/artSearched';
import SearchedCartsProps from '@/types/searchedCartsProps';

import Container from '@components/Container/styles';
import { Image, SearchedContainer } from '@components/SearchedCarts/styles';

const SearchedCarts: React.FC<SearchedCartsProps> = ({ artsId }) => {
  const [art, setArt] = useState<ArtSearched>();

  useEffect(() => {
    if (artsId.length > 1) {
      const fetchArtSearched = async () => {
        const response = await axios.get(
          `https://api.artic.edu/api/v1/artworks/${artsId[0]}`
        );
        const artFound = response.data.data;
        setArt({
          id: artFound.id,
          title: artFound.title,
          imageUrl: `https://www.artic.edu/iiif/2/${artFound.image_id}/full/843,/0/default.jpg`,
        });
      };

      fetchArtSearched();
    }
  }, [artsId]);

  return (
    <div>
      <Container>
        <SearchedContainer>
          {artsId.length > 1 ? (
            <Link to={`/details/${art?.id}`}>
              <Image src={art?.imageUrl} alt={art?.title} />
            </Link>
          ) : (
            ''
          )}
          {artsId.length === 1 ? 'Not found...' : ''}
        </SearchedContainer>
      </Container>
    </div>
  );
};

export default SearchedCarts;
