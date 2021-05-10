import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { RecentSeries } from '@pageSections/Directory/RecentSeries';

const Directory = () => (
  <LayoutApp title='Directorio - GxAnime'>
    <Container>
      <RecentSeries />
    </Container>
  </LayoutApp>
);

export default Directory;
