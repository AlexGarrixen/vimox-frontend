import React from 'react';
import { Grid } from '@components/Layout/Grid';
import Episode from '@modules/Serie/components/EpisodesCardEpisode';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';

const EpisodesGrid = ({ data }: EpisodesGridProps) => (
  <Grid cols={{ xs: 2, sm: 3, md: 4 }} gap={1.5}>
    {Array.isArray(data) &&
      data
        .sort((curr, prev) => curr.order - prev.order)
        .map(({ _id, name, thumbnail, order }) => (
          <Episode
            key={_id}
            id={_id}
            name={name}
            thumbnail={thumbnail}
            order={order}
          />
        ))}
  </Grid>
);

type EpisodesGridProps = {
  data: ResponseGetOneSerie['episodes'];
};

export default EpisodesGrid;
