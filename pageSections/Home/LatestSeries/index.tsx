import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from '@localComponents/home/latestSeries/Provider';
import { BackgroundCover } from '@localComponents/home/latestSeries/BackgroundCover';
import { InformationCarousel } from '@localComponents/home/latestSeries/InformationCarousel';
import { NavigationCarousel } from '@localComponents/home/latestSeries/NavigationCarousel';
import { Skeleton } from '@localComponents/home/latestSeries/Skeleton';
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
