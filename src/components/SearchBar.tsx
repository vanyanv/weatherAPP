import { useState, useEffect, FormEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import LastMovieContext from '../LastMovieContext';
import fetchSearch from '../fetchSearch';
import Movie from './Movie';
import { MovieType } from '../ApiResponsesTypes';

/**
 * SearchBar component that allows the user to search for a movie title.
 * @returns {JSX.Element} SearchBar component UI.
 */

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const fetch = useQuery(['search', search], fetchSearch, {
    enabled: false,
  });
  const { data, refetch } = fetch;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLastMovie] = useContext(LastMovieContext);
  const [lastMovie] = useContext(LastMovieContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch(); // Manually refetch
  };

  useEffect(() => {
    if (data) {
      setLastMovie(data as MovieType);
    }
  }, [data, setLastMovie]);

  //styling
  const myStyle = {
    height: '150px',
    padding: '3px',
  };
  return (
    <div>
      {lastMovie ? (
        <h3>
          Last Search: <img style={myStyle} src={lastMovie.Poster}></img>
        </h3>
      ) : (
        <h1></h1>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Search Title
          <input
            type='text'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          ></input>
        </label>
        <button type='submit'>Search Movie</button>
      </form>
      {!data ? <div></div> : <Movie fetch={fetch} />}
    </div>
  );
}
