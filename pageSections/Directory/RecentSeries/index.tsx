import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Typography } from '@components/DataDisplay/Typography';
import { Spacing } from '@components/Layout/Spacing';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { Filter } from '@localComponents/directory/recentSeries/Filter';
import { SeriesGrid } from '@localComponents/directory/recentSeries/SeriesGrid';
import { PaginationControls } from '@localComponents/directory/recentSeries/PaginationControls';
import { Skeleton } from '@localComponents/directory/recentSeries/Skeleton';

export const RecentSeries = () => {
  const { recoverFilterQuerys } = useFilterQuery();
  const filterQuerys = recoverFilterQuerys();
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error, refetch } = useQuery(
    [
      'series_directory',
      {
        ...filterQuerys,
        page_index: page,
        sort_createdAt: 'desc',
        limit_items: 12,
      },
    ],
    async ({ queryKey }) => getSeries(queryKey[1]),
    {
      keepPreviousData: true,
    }
  );

  return (
    <section>
      <Typography as='h4' white>
        Series recientes
      </Typography>
      <Spacing size={32} />
      <Filter />
      {error ? (
        <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>
      ) : isLoading ? (
        <Skeleton />
      ) : (
        <>
          <SeriesGrid series={data.series} />
          {Array.isArray(data.series) && data.series.length > 0 && (
            <PaginationControls
              page={page}
              lastPage={data.lastPage}
              onClickNext={() => setPage(page + 1)}
              onClickPrev={() => setPage(Math.max(page - 1, 0))}
            />
          )}
        </>
      )}
    </section>
  );
};
