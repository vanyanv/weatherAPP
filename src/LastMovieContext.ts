import { createContext } from 'react';
import MovieType from './ApiResponsesTypes';

const LastMovieContext = createContext<
  [MovieType, (lastMovie: MovieType) => void]
>([
  {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [
      {
        Source: '',
        Value: '',
      },
    ],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: '',
  },
  () => {},
]);

export default LastMovieContext;
