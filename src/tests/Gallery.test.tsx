//исправить тесты
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Gallery from '@components/Gallery';
// import { useFavorites } from '@helpers/favoritesContext';
// import { fetchGalleryArts } from '@services/fetchGalleryArts';
// import { sortGalleryArts } from '@helpers/sortGallery';
// import '@testing-library/jest-dom';

// jest.mock('@helpers/favoritesContext', () => ({
//   useFavorites: jest.fn(),
// }));

// jest.mock('@services/fetchGalleryArts', () => ({
//   fetchGalleryArts: jest.fn(),
// }));

// jest.mock('@helpers/sortGallery', () => ({
//   sortGalleryArts: jest.fn(),
// }));

// const mockToggleFavorite = jest.fn();
// const mockFavorites = [1, 2, 3];
// const mockArts = [
//   { id: 1, title: 'Art 1', artist: 'Artist 1', imageUrl: 'url1' },
//   { id: 2, title: 'Art 2', artist: 'Artist 2', imageUrl: 'url2' },
//   { id: 3, title: 'Art 3', artist: 'Artist 3', imageUrl: 'url3' },
// ];

// beforeEach(() => {
//   (useFavorites as jest.Mock).mockReturnValue({
//     favorites: mockFavorites,
//     toggleFavorite: mockToggleFavorite,
//   });

//   (fetchGalleryArts as jest.Mock).mockResolvedValue(mockArts);

//   (sortGalleryArts as jest.Mock).mockImplementation((arts) => arts);
// });

// describe('Gallery Component', () => {
//   test('renders loading state initially', () => {
//     render(<Gallery />);
//     expect(screen.getByAltText('Loading...')).toBeInTheDocument();
//   });

//   test('fetches and displays arts after loading', async () => {
//     render(<Gallery />);

//     await waitFor(() => {
//       expect(screen.getByText('Art 1')).toBeInTheDocument();
//       expect(screen.getByText('Art 2')).toBeInTheDocument();
//       expect(screen.getByText('Art 3')).toBeInTheDocument();
//     });
//   });

//   test('handles sorting', async () => {
//     render(<Gallery />);

//     await waitFor(() => {
//       const sortSelect = screen.getByRole('combobox');
//       fireEvent.change(sortSelect, { target: { value: 'title' } });

//       expect(sortGalleryArts).toHaveBeenCalledWith(mockArts, 'title');
//     });
//   });

//   test('handles favorite toggle', async () => {
//     render(<Gallery />);

//     await waitFor(() => {
//       fireEvent.click(screen.getByAltText('favorites icon'));

//       expect(mockToggleFavorite).toHaveBeenCalledWith(1);
//     });
//   });
// });
