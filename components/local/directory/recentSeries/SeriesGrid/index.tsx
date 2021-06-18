import React from 'react';
import Link from 'next/link';
import { Grid } from '@components/Layout/Grid';
import { Serie } from '@components/DataDisplay/Serie';
import { ResponseGetSeries } from '@globalTypes/serieServices';

type SeriesGridProps = {
  series: ResponseGetSeries['series'];
};

export const SeriesGrid = ({ series }: SeriesGridProps) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5 }} gap={1.5}>
        {Array.isArray(series) &&
          series.map(
            ({ _id, name, thumbnail, episodes, geners, isInQueue }) => (
              <Link key={_id} href={`/serie/${_id}`}>
                <a>
                  <Serie
                    name={name}
                    thumbnail={thumbnail}
                    countEpisodes={episodes}
                    geners={geners}
                    isInQueue={isInQueue}
                  />
                </a>
              </Link>
            )
          )}
      </Grid>
    </div>
  );
};
