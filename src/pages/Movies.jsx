import { Container, Section } from 'components';
import  SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
import  MovieList  from '../components/MovieList/MovieList';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/api';

export default function Movies () {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;
    setIsLoading(true);
    fetchMoviesByQuery(query)
      .then(data => setMovies(data))
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

console.log({movies});

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <SearchForm onSubmit={handleSubmit} />
        {movies.length > 0 && <MovieList movies={ movies } />}
        {Boolean(error) && <p>Error: {error.message}</p>}
      </Container>
    </Section>
  );
};

