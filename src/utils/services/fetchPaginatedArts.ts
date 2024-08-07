import axios from 'axios';

import { LENGTH_PAGINATION } from '@constants/index';

import { fetchArtId } from './fetchArtId';
import Art from '@/types/art';
import ApiResponse from '@/types/apiResponsePaginated';

export const fetchPaginatedArts = async (
  currentPage: number,
  query: string
): Promise<Art[]> => {
  try {
    const response = await axios.get<ApiResponse>(query, {
      params: {
        page: currentPage,
        limit: LENGTH_PAGINATION,
      },
    });
    if (query.includes('search?')) {
      const artworksByFetchId = await Promise.all(
        response.data.data.map(({ id }) => fetchArtId(id))
      );

      const artworks: Art[] = artworksByFetchId.map(
        ({ id, title, artist_title, image_id }) => ({
          id: id,
          title: title,
          artist: artist_title,
          imageUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        })
      );
      return artworks;
    } else {
      const artworks: Art[] = response.data.data.map(
        ({ id, title, artist_title, image_id }) => ({
          id: id,
          title: title,
          artist: artist_title,
          imageUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
        })
      );
      return artworks;
    }
  } catch (error) {
    console.error('Error fetching paginated artworks', error);
    return [];
  }
};
