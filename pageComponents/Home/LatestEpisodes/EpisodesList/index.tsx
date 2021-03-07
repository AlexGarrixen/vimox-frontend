import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Grid } from '@components/Layout/Grid';
import type { GetEpisodesResponse } from '@globalTypes/episodeServices';
import { Episode } from './Episode';

type EpisodesListProps = {
  data: GetEpisodesResponse;
};

export const EpisodesList = ({ data }: EpisodesListProps) => (
  <div>
    <Typography as='h4' white margin='0 0 32px 0'>
      Ultimos Episodios
    </Typography>
    <Grid as='ul' gap={2} xs='1' sm='2' md='3' lg='4'>
      {data.map(({ _id, name, thumbnail, serie }) => (
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
