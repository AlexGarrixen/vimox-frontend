import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Spacing } from '@components/Layout/Spacing';
import { Grid } from '@components/Layout/Grid';
import { ResponseGetEpisodes } from '@globalTypes/episodeServices';
import { Episode } from '../Episode';

type EpisodesListProps = {
  episodes: ResponseGetEpisodes['data'];
};

export const EpisodesGrid = ({ episodes }: EpisodesListProps) => (
  <div>
    <Title level='4' colorScheme='white'>
      Ultimos Episodios
    </Title>
    <Spacing size={32} />
    <Grid as='ul' gap={2} cols={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
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
