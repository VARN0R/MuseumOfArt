import Art from '@/types/art';

export const sortGalleryArts = (arts: Art[], sortType: string) => {
  if (sortType === 'title') {
    arts = [...arts].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === 'artist') {
    arts = [...arts].sort((a, b) => {
      const artistA = a.artist || '';
      const artistB = b.artist || '';
      return artistA.localeCompare(artistB);
    });
  }
  return arts;
};
