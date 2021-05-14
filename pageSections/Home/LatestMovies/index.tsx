import React from 'react';
import { useQuery } from 'react-query';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { getSeries } from '@services/series';
import { Carousel } from '@localComponents/home/latestMovies/Carousel';
import { Skeleton } from '@localComponents/home/latestMovies/Skeleton';
import { Root } from './styled';

export const LatestMovies = () => {
  const { data, isLoading, error, refetch } = useQuery(
    'latestMovies_home',
    () =>
      getSeries({ limit_items: 10, type: 'pelicula', sort_createdAt: 'desc' })
  );

  if (error)
    return (
      <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
        {error}
      </ErrorMessage>
    );

  if (isLoading) return <Skeleton />;

  return (
    <Root>
      <Container>
        <Typography as='h4' white margin='0 0 32px 0'>
          Ultimas peliculas
        </Typography>
        <Carousel series={data.series} />
      </Container>
    </Root>
  );
};