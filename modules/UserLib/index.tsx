import React from 'react';
import { Spacing } from '@components/Layout/Spacing';
import { ProviderLibraryStore } from './contexts/LibraryStore';
import QueuedSeries from './sections/QueuedSeries';

const UserLib = () => (
  <ProviderLibraryStore>
    <Spacing size={40} />
    <QueuedSeries />
  </ProviderLibraryStore>
);

export default UserLib;
