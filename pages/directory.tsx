import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import LatestReleases from '@modules/Directory';

const Directory = () => (
  <LayoutApp title='Directorio - Vimox'>
    <LatestReleases />
  </LayoutApp>
);

export default Directory;
