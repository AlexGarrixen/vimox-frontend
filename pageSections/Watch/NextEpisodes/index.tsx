import React from 'react';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';
import { Episode } from '@localComponents/watch/NextEpisodes/Episode';

export const NextEpisodes = () => (
  <div>
    <Typography as='h3' size='lg' white margin='0 0 16px 0'>
      Proximos episodios
    </Typography>
    <Grid gap={1.5} xs='2' md='1'>
      <Episode thumbnail='' name='Nombre del episodio' order={1} />
      <Episode thumbnail='' name='Nombre del episodio' order={2} />
      <Episode thumbnail='' name='Nombre del episodio' order={3} />
    </Grid>
  </div>
);
