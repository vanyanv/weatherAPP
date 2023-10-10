import { useQuery } from '@tanstack/react-query';
import fetchPopularMovies from '../fetchPopularMovies';
import { PopularMovieType } from '../ApiResponsesTypes';

export default function PopularMovies() {
  //styling
  const styleImg = {
    height: '200px',
  };
  //data
  const { data, isLoading } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h2>Popular Movies</h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {data.results?.map((movie: PopularMovieType) => {
          return (
            <div key={movie.id}>
              <img
                style={styleImg}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
