import React from 'react';
import { QueueList } from '@pageSections/Queue/QueueList';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { AccessDenied } from '@components/Feedback/AccessDenied';
import { useSession } from '@contexts/Auth/hooks';

const MyList = (): JSX.Element => {
  const [session, loading] = useSession();

  return (
    <LayoutApp title='Mi lista' verticallyCenterContent={!session}>
      {loading ? <div /> : !session ? <AccessDenied /> : <QueueList />}
    </LayoutApp>
  );
};

export default MyList;
