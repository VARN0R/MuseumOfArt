import styled from 'styled-components';
import Container from './Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  justify-items: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

interface ArtSearched {
  id: number;
  title: string;
  imageUrl: string;
}

interface SearchedCartsProps {
  artsId: Array<number>;
}

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

  console.log(artsId);
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
