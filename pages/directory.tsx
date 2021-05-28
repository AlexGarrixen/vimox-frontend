import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { RecentSeries } from '@pageSections/Directory/RecentSeries';

const Directory = () => (
  <LayoutApp title='Directorio - GxAnime'>
    <Container>
      <Spacing size={80} />
      <RecentSeries />
    </Container>
  </LayoutApp>
);

export default Directory;
