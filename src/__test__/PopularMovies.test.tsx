import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import PopularMovies from '../components/PopularMovies';

test('Display Loading Message', async () => {
  const popularMovies = render(<PopularMovies />);

  //need to mock the fetch call

  const loading = await popularMovies.findByText('Loading....');
  expect(loading.textContent).toBe('Loading....');
  popularMovies.unmount();
});
