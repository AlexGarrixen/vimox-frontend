import React from 'react';
import { Grid } from '@components/Layout/Grid';
import { Serie } from '@components/DataDisplay/Serie';

export const SeriesGrid = () => (
  <Grid xs='2' sm='3' md='4' lg='5' gap={1.5} style={{ marginBottom: 40 }}>
    <Serie />
    <Serie />
    <Serie />
    <Serie />
    <Serie />
    <Serie />
    <Serie />
    <Serie />
  </Grid>
);
