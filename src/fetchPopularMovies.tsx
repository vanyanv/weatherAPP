const fetchPopularMovies = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=7372a71d709db5dd7b8bcacd206fec04'
  );

  return res.json();
};

export default fetchPopularMovies;
