import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Episode } from './Episode';

export const EpisodesGrid = () => (
  <Container style={{ marginTop: 80, marginBottom: 30 }}>
    <Typography as='h4' margin='0 0 20px 0' white>
      Lista de episodeos
    </Typography>
    <Grid xs='2' sm='3' md='4' gap={1.5}>
      <Episode />
      <Episode />
      <Episode />
      <Episode />
      <Episode />
      <Episode />
    </Grid>
  </Container>
);
