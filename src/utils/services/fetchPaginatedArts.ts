import axios from 'axios';

import { LENGTH_PAGINATION } from '@constants/index';

import { fetchArtId } from './fetchArtId';

export const fetchPaginatedArts = async (
  currentPage: number,
  query: string
) => {
  try {
    if (query.includes('search?')) {
      const response = await axios.get(query, {
        params: {
          page: currentPage,
          limit: LENGTH_PAGINATION,
        },
      });
      const artworksId = await Promise.all(
        response.data.data.map((art: any) => fetchArtId(art.id))
      );

      const artworks = artworksId.map((art: any) => ({
        id: art.id,
        title: art.title,
        artist: art.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
      }));
      return artworks;
    } else {
      const response = await axios.get(query, {
        params: {
          page: currentPage,
          limit: LENGTH_PAGINATION,
        },
      });
      const artworks = response.data.data.map((art: any) => ({
        id: art.id,
        title: art.title,
        artist: art.artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
      }));
      return artworks;
    }
  } catch (error) {
    console.error('Error fetching paginated artworks', error);
  }
};
