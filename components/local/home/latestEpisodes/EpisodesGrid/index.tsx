import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Spacing } from '@components/Layout/Spacing';
import { Grid } from '@components/Layout/Grid';
import { GetEpisodesResponse } from '@globalTypes/episodeServices';
import { Episode } from '../Episode';

type EpisodesListProps = {
  episodes: GetEpisodesResponse['data'];
};

export const EpisodesGrid = ({ episodes }: EpisodesListProps) => (
  <div>
    <Typography as='h4' white>
      Ultimos Episodios
    </Typography>
    <Spacing size={32} />
    <Grid as='ul' gap={2} xs='1' sm='2' md='3' lg='4'>
      {Array.isArray(episodes) &&
        episodes.map(({ _id, name, thumbnail, serie }) => (
          <li key={_id}>
            <Episode
              id={_id}
              serieId={serie._id}
              name={name}
              serie={serie.name}
              thumbnail={thumbnail}
            />
          </li>
        ))}
    </Grid>
  </div>
);
