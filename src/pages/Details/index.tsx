import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ArtDetails from '@/types/artDetails';

import loadingGif from '@assets/gif/loading.gif';

import Footer from '@components/Footer';
import Header from '@components/Header';

import Loader from '@components/Loader/styles';
import Container from '@components/Container/styles';
import {
  Artist,
  CreditLine,
  DetailsContainer,
  DetailsText,
  Dimensions,
  Date,
  Image,
  Nationality,
  Public,
  Repository,
  Subtitle,
  Title,
} from './styles';

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
