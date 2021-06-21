import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { RecentSeries } from '@pageSections/Directory/RecentSeries';

const Directory = () => (
  <LayoutApp title='Directorio - Vimox'>
    <Container>
      <Spacing size={40} />
      <RecentSeries />
    </Container>
  </LayoutApp>
);

export default Directory;
