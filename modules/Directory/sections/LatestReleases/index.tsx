import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Spacing } from '@components/Layout/Spacing';
import Filters from '@modules/Directory/components/LatestReleasesFilters';
import LatestReleasesGrid from '@modules/Directory/components/LatestReleasesGrid';
import PaginationControls from '@modules/Directory/components/LatestReleasesPaginationControls';

const LatestReleases = () => {
  return (
    <section>
      <Spacing size={40} />
      <Title level='4' colorScheme='white'>
        Ultimos Estrenos
      </Title>
      <Spacing size={32} />
      <Filters />
      <LatestReleasesGrid />
      <Spacing size={32} />
      <PaginationControls />
      <Spacing size={24} />
    </section>
  );
};

export default LatestReleases;
