import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { Grid } from '@components/Layout/Grid';
import { Serie } from '@components/DataDisplay/Serie';
import { Button } from '@components/Form/Button';
import { DirectoryContext } from '@pageComponents/Directory/Context';
import { Skeleton } from './Skeleton';
import { getSeries } from '@services/series';
import { SeriesGridBox, MoreButtonBox } from './styled';

export const SeriesGrid = () => {
  const { querys } = React.useContext(DirectoryContext);

  const [page, setPage] = React.useState(1);

  const { data, isLoading, error } = useQuery(
    [
      'series_directory',
      { ...querys, page_index: page, sort_createdAt: 'desc', limit_items: 12 },
    ],
    async ({ queryKey }) => getSeries(queryKey[1]),
    {
      keepPreviousData: true,
    }
  );

  if (error) return <p>{error}</p>;

  if (isLoading) return <Skeleton />;

  return (
    <SeriesGridBox style={{ marginBottom: 40 }}>
      <Grid xs='2' sm='3' md='4' lg='5' gap={1.5}>
        {data.series.map(({ _id, name, imageMd, totalDuration, episodes }) => (
          <Link key={_id} href={`/serie/${_id}`}>
            <a>
              <Serie
                name={name}
                duration={totalDuration}
                thumbnail={imageMd}
                totalEpisodes={episodes.length}
              />
            </a>
          </Link>
        ))}
      </Grid>
      <MoreButtonBox>
        <Button
          disabled={page === 1}
          onClick={() => setPage(Math.max(page - 1, 0))}
          margin='0 12px 0 0'
        >
          Anterior
        </Button>
        <Button
          primary
          disabled={page === data.lastPage}
          onClick={() => setPage(page + 1)}
        >
          Siguiente
        </Button>
      </MoreButtonBox>
    </SeriesGridBox>
  );
};
