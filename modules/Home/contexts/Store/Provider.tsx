import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { getEpisodes } from '@services/episodes';
import { Context } from './Context';

export const ProviderStore: React.FC = ({ children }) => {
  const querySeries = useQuery(
    'latestSeries_home',
    () =>
      getSeries({
        release: 'last_premieres',
        sort_release: 'desc',
        limit_items: 10,
        type: 'Tv',
      }),
    {
      cacheTime: 900000,
    }
  );

  const queryMovies = useQuery(
    'latestMovies_home',
    () =>
      getSeries({
        limit_items: 10,
        type: 'Pelicula',
        sort_release: 'desc',
        release: 'last_premieres',
      }),
    {
      cacheTime: 900000,
    }
  );

  const queryEpisodes = useQuery(
    'latestEpisodes_home',
    () =>
      getEpisodes({
        release: 'last_premieres',
        sort_release: 'desc',
        limit_items: 12,
      }),
    {
      cacheTime: 900000,
    }
  );

  return (
    <Context.Provider
      value={{
        latestSeries: querySeries,
        latestEpisodes: queryEpisodes,
        latestMovies: queryMovies,
      }}
    >
      {children}
    </Context.Provider>
  );
};
