import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LastMovieContext from './LastMovieContext.js';
import { MovieType } from './ApiResponsesTypes.js';
import PopularMovies from './components/PopularMovies.js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const lastMovie = useState(null as MovieType | null);

  return (
    <QueryClientProvider client={queryClient}>
      <LastMovieContext.Provider value={lastMovie}>
        <>
          <SearchBar />
          <PopularMovies />
        </>
      </LastMovieContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
