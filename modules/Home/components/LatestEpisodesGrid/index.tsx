import React from 'react';
import { Grid } from '@components/Layout/Grid';
import Episode from '../LatestEpisodesEpisodeItem';
import useLatestEpisodes from '@modules/Home/hooks/useLatestEpisodes';

const EpisodesGrid = () => {
  const {
    data: { data: episodes },
  } = useLatestEpisodes();

  return (
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
  );
};

export default EpisodesGrid;
