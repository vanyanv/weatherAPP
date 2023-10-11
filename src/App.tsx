import './App.css';
import SearchBar from './components/SearchBar.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import { MovieType } from './ApiResponsesTypes.js';
import PopularMovies from './components/PopularMovies.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <>
          <SearchBar />
          <PopularMovies />
        </>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
