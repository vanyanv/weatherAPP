import { MovieType } from './ApiResponsesTypes';
import { QueryFunction } from '@tanstack/react-query';

const fetchSearch: QueryFunction<MovieType, ['search', string]> = async ({
  queryKey,
}) => {
  const search = queryKey[1];

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=922db138&t=${search}`
  );

  if (!res.ok) {
    throw new Error(`${search} fetch not ok`);
  }

  return res.json();
};

export default fetchSearch;
