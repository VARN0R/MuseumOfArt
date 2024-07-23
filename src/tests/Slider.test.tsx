import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from '../components/Slider';
import Art from '../types/Art';
import { MemoryRouter } from 'react-router-dom';

const arts: Art[] = [
  { id: 1, title: 'Art 1', artist: 'Artist 1', imageUrl: 'url1' },
  { id: 2, title: 'Art 2', artist: 'Artist 2', imageUrl: 'url2' },
  { id: 3, title: 'Art 3', artist: 'Artist 3', imageUrl: 'url3' },
  { id: 4, title: 'Art 4', artist: 'Artist 4', imageUrl: 'url4' },
  { id: 5, title: 'Art 5', artist: 'Artist 5', imageUrl: 'url5' },
  { id: 6, title: 'Art 6', artist: 'Artist 6', imageUrl: 'url6' },
  { id: 7, title: 'Art 7', artist: 'Artist 7', imageUrl: 'url7' },
  { id: 8, title: 'Art 8', artist: 'Artist 8', imageUrl: 'url8' },
  { id: 9, title: 'Art 9', artist: 'Artist 9', imageUrl: 'url9' },
  { id: 10, title: 'Art 10', artist: 'Artist 10', imageUrl: 'url10' },
  { id: 11, title: 'Art 11', artist: 'Artist 11', imageUrl: 'url11' },
  { id: 12, title: 'Art 12', artist: 'Artist 12', imageUrl: 'url12' },
];

describe('Slider component', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Slider arts={arts} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Topics for you/i)).toBeInTheDocument();
    expect(screen.getByText(/Our special gallery/i)).toBeInTheDocument();

    expect(screen.getByText('Art 1')).toBeInTheDocument();
    expect(screen.getByText('Art 2')).toBeInTheDocument();
    expect(screen.getByText('Art 3')).toBeInTheDocument();
  });

  test('handles pagination correctly', () => {
    render(
      <MemoryRouter>
        <Slider arts={arts} />
      </MemoryRouter>
    );

    const prevButton = screen.getByText('<');
    expect(prevButton).toBeDisabled();

    fireEvent.click(screen.getByText('2'));

    expect(screen.getByText('Art 4')).toBeInTheDocument();
    expect(screen.getByText('Art 5')).toBeInTheDocument();
    expect(screen.getByText('Art 6')).toBeInTheDocument();
  });
});
