import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Typography } from '@components/DataDisplay/Typography';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { Filter } from './Filter';
import { SeriesGrid } from './SeriesGrid';
import { PaginationControls } from './PaginationControls';
import { Skeleton } from './Skeleton';

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
      <Typography as='h4' white margin='80px 0 32px 0'>
        Series recientes
      </Typography>
      <Filter />
      {error ? (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
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
