import axios from 'axios';

export const fetchArtId = async (id: number) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );
  return response.data.data;
};
