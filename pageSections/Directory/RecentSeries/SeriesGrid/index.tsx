import React from 'react';
import Link from 'next/link';
import { Grid } from '@components/Layout/Grid';
import { Serie } from '@components/DataDisplay/Serie';
import { GetSeriesResponse } from '@globalTypes/serieServices';

type SeriesGridProps = {
  series: GetSeriesResponse['series'];
};

export const SeriesGrid = ({ series }: SeriesGridProps) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <Grid xs='2' sm='3' md='4' lg='5' gap={1.5}>
        {Array.isArray(series) &&
          series.map(({ _id, name, imageMd, totalDuration, episodes }) => (
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
    </div>
  );
};
