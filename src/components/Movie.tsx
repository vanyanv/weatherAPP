import { MovieType } from '../ApiResponsesTypes';

type Props = {
  fetch: {
    data: MovieType;
    isLoading: boolean;
  };
};

export default function Movie({ fetch }: Props) {
  const { data, isLoading } = fetch;

  if (data.Response === 'False') {
    return <h2>Movie Not Found</h2>;
  }

  if (isLoading) {
    return <h2>Loading....</h2>;
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
            <td>{data.Title}</td>
            <td>{data.Year}</td>
            <td>{data.Type}</td>
            <td>{data.imdbID}</td>
            <td>
              <img src={`${data.Poster}`}></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
