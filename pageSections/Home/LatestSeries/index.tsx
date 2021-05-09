import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from './Context';
import { BackgroundCover } from './BackgroundCover';
import { InformationCarousel } from './InformationCarousel';
import { NavigationCarousel } from './NavigationCarousel';
import { Skeleton } from './Skeleton';
import { Root } from './styled';

export const LatestSeries = () => {
  const { isLoading, data, error, refetch } = useQuery(
    'latestSeries_home',
    () => getSeries({ sort_createdAt: 'desc', limit_items: 10, type: 'tv' })
  );

  if (error)
    return (
      <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
        {error}
      </ErrorMessage>
    );

  if (isLoading) return <Skeleton />;

  return (
    <Provider series={data.series}>
      <Root>
        <BackgroundCover />
        <InformationCarousel />
        <NavigationCarousel />
      </Root>
    </Provider>
  );
};
