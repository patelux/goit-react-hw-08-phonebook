import { fetchMovies } from 'service/api';
import { useEffect, useState } from 'react';

import { Container, Section, GeneralsectionTitle } from 'components';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies().then((data) => {
      setMovies(data.results);
    })
    .catch(error => {setError(error.message);})
    .finally(() => {
      setIsLoading(false);
    });

  }, []);
console.log(movies);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <GeneralsectionTitle>Trending today</GeneralsectionTitle>
        {movies && <MovieList movies={movies} />}
        {Boolean(error) && <p>Error: {error.message}</p>}
      </Container>
    </Section>
  );
};


