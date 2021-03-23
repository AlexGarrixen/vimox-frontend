import React from 'react';
import { QueueList } from '@pageComponents/Queue/QueueList';
import { LayoutApp } from '@components/Layout/LayoutApp';

const MyList = (): JSX.Element => (
  <LayoutApp title='Mi lista'>
    <QueueList />
  </LayoutApp>
);

export default MyList;
