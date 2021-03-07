import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Episode } from './Episode';
import type { Serie } from '@globalTypes/serieServices';

type EpisodesGridProps = {
  data: Serie['episodes'];
  serieId: string;
};

export const EpisodesGrid = ({ data, serieId }: EpisodesGridProps) => (
  <Container style={{ marginTop: 80, marginBottom: 30 }}>
    <Typography as='h4' margin='0 0 20px 0' white>
      Lista de episodeos
    </Typography>
    <Grid xs='2' sm='3' md='4' gap={1.5}>
      {data.map(({ _id, name, thumbnail, order }) => (
        <Episode
          key={_id}
          id={_id}
          serieId={serieId}
          name={name}
          thumbnail={thumbnail}
          order={order}
        />
      ))}
    </Grid>
  </Container>
);
