import React from 'react';
import { Search } from '@components/Icon/Search';
import { Grid } from '@components/Layout/Grid';
import { Result } from './Result';
import { SeriesFinderBox, HeaderBox, TextBox, ResultsBox } from './styled';

export const SeriesFinder = () => (
  <SeriesFinderBox>
    <HeaderBox>
      <Search xl />
      <TextBox placeholder='Buscar serie' />
    </HeaderBox>
    <ResultsBox>
      <Grid gap={1.5} cols='1'>
        <Result />
        <Result />
        <Result />
      </Grid>
    </ResultsBox>
  </SeriesFinderBox>
);
