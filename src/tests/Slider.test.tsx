//исправить тесты
// import '@testing-library/jest-dom';
// import { fireEvent, render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';

// import Slider from '@components/Slider';

// describe('Slider component', () => {
//   test('renders correctly', () => {
//     render(
//       <MemoryRouter>
//         <Slider query={''} />
//       </MemoryRouter>
//     );

//     expect(screen.getByText(/Topics for you/i)).toBeInTheDocument();
//     expect(screen.getByText(/Our special gallery/i)).toBeInTheDocument();

//     expect(screen.getByText('Art 1')).toBeInTheDocument();
//     expect(screen.getByText('Art 2')).toBeInTheDocument();
//     expect(screen.getByText('Art 3')).toBeInTheDocument();
//   });

//   test('handles pagination correctly', () => {
//     render(
//       <MemoryRouter>
//         <Slider query={''} />
//       </MemoryRouter>
//     );

//     const prevButton = screen.getByText('<');
//     expect(prevButton).toBeDisabled();

//     fireEvent.click(screen.getByText('2'));

//     expect(screen.getByText('Art 4')).toBeInTheDocument();
//     expect(screen.getByText('Art 5')).toBeInTheDocument();
//     expect(screen.getByText('Art 6')).toBeInTheDocument();
//   });
// });
