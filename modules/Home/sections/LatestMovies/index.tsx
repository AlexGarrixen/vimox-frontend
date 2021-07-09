import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import Carousel from '@modules/Home/components/LatestMoviesCarousel';
import Skeleton from '@modules/Home/components/LatestMoviesSkeleton';
import useLatestMovies from '@modules/Home/hooks/useLatestMovies';

const LatestMovies = () => {
  const { isLoading, error, refetch } = useLatestMovies();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;

  return (
    <Container>
      <Title level='4' colorScheme='white'>
        Ultimas peliculas
      </Title>
      <Spacing size={32} />
      <Carousel />
    </Container>
  );
};

export default LatestMovies;
