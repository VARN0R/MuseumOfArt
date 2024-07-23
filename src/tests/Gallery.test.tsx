import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/Gallery';
import Art from '../types/Art';
import { MemoryRouter } from 'react-router-dom';

const mockArts: Art[] = [
  { id: 1, title: 'Art 1', artist: 'Artist A', imageUrl: 'url1' },
  { id: 2, title: 'Art 2', artist: 'Artist B', imageUrl: 'url2' },
  { id: 3, title: 'Art 3', artist: 'Artist C', imageUrl: 'url3' },
  { id: 4, title: 'Art 4', artist: 'Artist D', imageUrl: 'url4' },
  { id: 5, title: 'Art 5', artist: 'Artist E', imageUrl: 'url5' },
  { id: 6, title: 'Art 6', artist: 'Artist F', imageUrl: 'url6' },
  { id: 7, title: 'Art 7', artist: 'Artist G', imageUrl: 'url7' },
  { id: 8, title: 'Art 8', artist: 'Artist H', imageUrl: 'url8' },
  { id: 9, title: 'Art 9', artist: 'Artist I', imageUrl: 'url9' },
  { id: 10, title: 'Art 10', artist: 'Artist J', imageUrl: 'url10' },
  { id: 11, title: 'Art 11', artist: 'Artist K', imageUrl: 'url11' },
  { id: 12, title: 'Art 12', artist: 'Artist L', imageUrl: 'url12' },
  { id: 13, title: 'Art 13', artist: 'Artist M', imageUrl: 'url13' },
  { id: 14, title: 'Art 14', artist: 'Artist N', imageUrl: 'url14' },
  { id: 15, title: 'Art 15', artist: 'Artist O', imageUrl: 'url15' },
];

describe('Gallery component', () => {
  test('renders Gallery component', () => {
    render(
      <MemoryRouter>
        <Gallery arts={mockArts} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Here some more/i)).toBeInTheDocument();
  });

  test('sorts arts by title', () => {
    render(
      <MemoryRouter>
        <Gallery arts={mockArts} />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'title' },
    });
    const sortedArts = mockArts
      .slice(13, 22)
      .sort((a, b) => a.title.localeCompare(b.title));
    const artTitles = screen.getAllByRole('heading', { name: /Art \d+/ });
    artTitles.forEach((title, index) => {
      expect(title).toHaveTextContent(sortedArts[index].title);
    });
  });

  test('sorts arts by artist', () => {
    render(
      <MemoryRouter>
        <Gallery arts={mockArts} />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'artist' },
    });
    const sortedArts = mockArts.slice(13, 22).sort((a, b) => {
      const artistA = a.artist || '';
      const artistB = b.artist || '';
      return artistA.localeCompare(artistB);
    });
    const artArtists = screen.getAllByText(/Artist [A-Z]/);
    artArtists.forEach((artist, index) => {
      expect(artist).toHaveTextContent(
        sortedArts[index].artist || 'Name is unknown'
      );
    });
  });
});
