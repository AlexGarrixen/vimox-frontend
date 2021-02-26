import React from 'react';
import ScrollBar from 'simplebar-react';
import { Typography } from '@components/DataDisplay/Typography';
import { Grid } from '@components/Layout/Grid';
import { Episode } from './Episode';
import { EpisodesListBox } from './styled';

export const EpisodesList = () => (
  <EpisodesListBox>
    <Typography as='h4' white margin='0 0 32px 0'>
      Ultimos Episodios
    </Typography>
    <div>
      <ScrollBar>
        <Grid as='ul' gap={1.5} sm='2' md='1' style={{ marginRight: 12 }}>
          <li>
            <Episode />
          </li>
          <li>
            <Episode />
          </li>
          <li>
            <Episode />
          </li>
          <li>
            <Episode />
          </li>
          <li>
            <Episode />
          </li>
        </Grid>
      </ScrollBar>
    </div>
  </EpisodesListBox>
);
