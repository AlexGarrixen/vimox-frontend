import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';
import { SeriesGrid } from '@pageComponents/Directory/SeriesGrid';
import { Filter } from '@pageComponents/Directory/Filter';

const Home = () => (
  <LayoutApp>
    <Container>
      <Typography as='h4' white margin='80px 0 32px 0'>
        Series recientes
      </Typography>
      <Filter />
      <SeriesGrid />
    </Container>
  </LayoutApp>
);

export default Home;
