import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Episode } from '@localComponents/serie/EpisodesGrid/Episode';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';

type EpisodesGridProps = {
  data: ResponseGetOneSerie['episodes'];
};

export const EpisodesGrid = ({ data }: EpisodesGridProps) => (
  <Container>
    <Typography as='h4' margin='0 0 20px 0' white>
      Lista de episodeos
    </Typography>
    <Grid xs='2' sm='3' md='4' gap={1.5}>
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
  </Container>
);
