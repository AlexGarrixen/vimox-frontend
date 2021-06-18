import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Episode } from '@localComponents/serie/EpisodesGrid/Episode';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';

type EpisodesGridProps = {
  data: ResponseGetOneSerie['episodes'];
};

export const EpisodesGrid = ({ data }: EpisodesGridProps) => (
  <Container>
    <Title level='4' colorScheme='white'>
      Lista de episodeos
    </Title>
    <Spacing size={20} />
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
  </Container>
);
