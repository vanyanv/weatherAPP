import { useState, FormEvent, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { setLastMovie } from '../lastMovieSlice';
import fetchSearch from '../fetchSearch';
import Movie from './Movie';
export default function SearchBar() {
  const [search, setSearch] = useState('');
  const fetch = useQuery(['search', search], fetchSearch, {
    enabled: false,
  });
  const { data, refetch } = fetch;

  //redux
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch(); // Manually refetch
  };

  const searchedMovies = useSelector((state: any) => state.lastMovie.value);
  console.log('searched Movies in Redux:', searchedMovies);

  useEffect(() => {
    if (data?.Response === 'True') {
      console.log(data);
      dispatch(setLastMovie(data));
    }
  }, [data]);

  const myStyle = {
    height: '150px',
    padding: '3px',
  };
  return (
    <div>
      {searchedMovies.map((movie: any) => {
        return (
          <div key={movie.imdbID}>
            <img style={myStyle} src={movie.Poster} alt='movie poster'></img>
          </div>
        );
      })}
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
