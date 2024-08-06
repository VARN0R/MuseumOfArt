import axios from 'axios';

import ApiResponse from '@/types/apiResponsePaginated';
import Art from '@/types/art';

export const fetchGalleryArts = async (): Promise<Art[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      'https://api.artic.edu/api/v1/artworks',
      {
        params: {
          page: 1,
          limit: 50,
        },
      }
    );
    const artworks: Art[] = response.data.data.map(
      ({ id, title, artist_title, image_id }) => ({
        id,
        title,
        artist: artist_title,
        imageUrl: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
      })
    );
    return artworks;
  } catch (error) {
    console.error('Error fetching artworks', error);
    return [];
  }
};
