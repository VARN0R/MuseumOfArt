import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ImageProps from '../types/ImageProps';
import Loader from '../components/Loader';
import loadingGif from '../assets/gif/loading.gif';

interface ArtDetails {
  id: number;
  title?: string;
  artist: string;
  imageUrl: string;
  birthDate: string;
  deathDate: string;
  artistNationalit: string;
  dimensions: string;
  creditLine: string;
  repository: string;
}

const Image = styled.img<ImageProps>`
  width: 497px;
  height: 570px;
  display: ${(props) => (props.loaded ? 'block' : 'none')};
  object-fit: cover;
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Artist = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: #e0a449;
  margin-top: 32px;
`;

const Date = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #393939;
  margin-top: 16px;
`;

const Public = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #393939;
  margin-top: 16px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: #393939;
`;

const Subtitle = styled(Title)`
  margin-top: 170px;
  @media (max-width: 992px) {
    margin-top: 60px;
  }
`;

const Nationality = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #e0a449;
  margin-top: 32px;
  span {
    color: #393939;
  }
`;

const Dimensions = styled(Nationality)`
  margin-top: 16px;
`;

const CreditLine = styled(Nationality)`
  margin-top: 16px;
`;

const Repository = styled(Nationality)`
  margin-top: 16px;
`;

const DetailsText = styled.div`
  width: 600px;
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 992px) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    width: 350px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Details = () => {
  const [art, setArt] = useState<ArtDetails>();
  const [imageLoad, setImageLoad] = useState<boolean>(false);

  const location = useLocation();
  const match = location.pathname.match(/\/details\/(\d+)/);
  const id = match ? match[1] : null;

  useEffect(() => {
    const fetchArtDetail = async () => {
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/${id}`
      );
      const artDetail = response.data.data;
      setArt({
        id: artDetail.id,
        title: artDetail.title,
        artist: artDetail.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${artDetail.image_id}/full/843,/0/default.jpg`,
        birthDate: artDetail.artist_begin_date,
        deathDate: artDetail.artist_end_date,
        artistNationalit: artDetail.artist_nationality,
        dimensions: artDetail.dimensions,
        creditLine: artDetail.credit_line,
        repository: artDetail.repository,
      });
    };

    fetchArtDetail();
  }, [id]);

  return (
    <div>
      <Header></Header>
      <Container>
        <DetailsContainer>
          <Loader loaded={imageLoad} width="497px" height="570px">
            <img src={loadingGif} alt="Loading..." />
          </Loader>
          <Image
            src={art?.imageUrl}
            alt={art?.title}
            loaded={imageLoad}
            onLoad={() => setImageLoad(true)}
          ></Image>

          <DetailsText>
            <Title>{art?.title}</Title>
            <Artist>{art?.artist ? art?.artist : 'Name is unknown'}</Artist>
            <Date>{art?.birthDate ? art?.birthDate : 'Date is unknown'}</Date>
            <Subtitle>Overview</Subtitle>
            <Nationality>
              Artist nacionality:{'  '}
              {art?.artistNationalit ? (
                <span>{art?.artistNationalit}</span>
              ) : (
                <span>No info about nacionality</span>
              )}
            </Nationality>
            <Dimensions>
              Dimensions: Sheet:{'  '}
              {art?.dimensions ? (
                <span>{art?.dimensions}</span>
              ) : (
                <span>No info about dimensions</span>
              )}
            </Dimensions>
            <CreditLine>
              Credit Line:{'  '}
              {art?.creditLine ? (
                <span>{art?.creditLine}</span>
              ) : (
                <span>No info about credit line</span>
              )}
            </CreditLine>
            <Repository>
              Repository:{'  '}
              {art?.repository ? (
                <span>{art?.repository}</span>
              ) : (
                <span>No info about repository</span>
              )}
            </Repository>
            <Public>Public</Public>
          </DetailsText>
        </DetailsContainer>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Details;
