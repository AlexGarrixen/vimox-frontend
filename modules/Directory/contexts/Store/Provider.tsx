import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Context } from './Context';
import { getSeries } from '@services/series';
import { usePreviousValue } from '@hooks/usePreviousValue';
import { useFilterQuery } from '@hooks/useFilterQuery';

export const ProviderStore: FC = ({ children }) => {
  const [page, setPage] = React.useState(1);
  const previousPage = usePreviousValue(page);
  const { recoverFilterQuerys } = useFilterQuery();
  const filterQuerys = recoverFilterQuerys();
  const previousFilterQuerys = usePreviousValue(filterQuerys);

  const queryLatestReleases = useQuery(
    'series_directory',
    async () =>
      getSeries({
        ...filterQuerys,
        limit_items: 12,
        release: 'last_premieres',
        sort_release: 'desc',
        page_index: page,
      }),
    {
      keepPreviousData: true,
      cacheTime: 900000,
      enabled:
        JSON.stringify(previousFilterQuerys) !== JSON.stringify(filterQuerys) ||
        page !== previousPage,
    }
  );
  return (
    <Context.Provider
      value={{
        latestReleases: queryLatestReleases,
        pagination: {
          page,
          setPage,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
