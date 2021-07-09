import React from 'react';
import { ProviderStore } from './contexts/Store';
import { Container } from '@components/Layout/Container';
import LatestReleases from './sections/LatestReleases';

const Directory = () => (
  <ProviderStore>
    <Container>
      <LatestReleases />
    </Container>
  </ProviderStore>
);

export default Directory;
