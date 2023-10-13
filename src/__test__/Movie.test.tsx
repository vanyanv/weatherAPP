import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Movie from '../components/Movie'; // assuming Movie component is in the components folder
import mockMovieData from './mockData';

test('Displays Searched Movie Information', async () => {
  const movie = render(
    <Movie
      fetch={{
        data: mockMovieData,
      }}
    />
  );

  const movieTitle = await movie.findByTestId('movie-title');
  const movieYear = await movie.findByTestId('movie-year');
  const movieType = await movie.findByTestId('movie-type');
  const movieImdbID = await movie.findByTestId('movie-imdbID');
  const moviePoster = await movie.findByTestId('movie-poster');
  expect(movieTitle.textContent).toBe('The Shawshank Redemption');
  expect(movieYear.textContent).toBe('1994');
  expect(movieType.textContent).toBe('movie');
  expect(movieImdbID.textContent).toBe('tt0111161');
  expect(moviePoster.getAttribute('src')).toBe(
    'https://m.media-amazon.com/images/I/51S5jxODFgL._AC_.jpg'
  );
  movie.unmount();
});

test('Displays Movie Not Found Message', async () => {
  const movie = render(
    <Movie
      fetch={{
        data: {
          ...mockMovieData,
          Response: 'False',
        },
      }}
    />
  );

  const movieNotFound = await movie.findByText('Movie Not Found');
  expect(movieNotFound.textContent).toBe('Movie Not Found');
  movie.unmount();
});
