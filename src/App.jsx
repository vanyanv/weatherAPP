import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LastMovieContext from './LastMovieContext.js';

function App() {
  const lastMovie = useState(null);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <LastMovieContext.Provider value={lastMovie}>
        <>
          <SearchBar />
        </>
      </LastMovieContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
