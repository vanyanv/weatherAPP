import { MovieType } from '../ApiResponsesTypes';

type Props = {
  fetch: {
    data: MovieType;
  };
};

export default function Movie({ fetch }: Props) {
  const { data } = fetch;

  if (data.Response === 'False') {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
            <th>ImdbID</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-testid='movie-title'>{data.Title}</td>
            <td data-testid='movie-year'>{data.Year}</td>
            <td data-testid='movie-type'>{data.Type}</td>
            <td data-testid='movie-imdbID'>{data.imdbID}</td>
            <td>
              <img data-testid='movie-poster' src={`${data.Poster}`}></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
