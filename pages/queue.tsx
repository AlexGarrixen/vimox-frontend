import React from 'react';
import { QueueList } from '@pageSections/Queue/QueueList';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { AccessDenied } from '@components/Feedback/AccessDenied';
import { useSession } from '@contexts/Auth/hooks';

const MyList = (): JSX.Element => {
  const [session, loading] = useSession();

  if (loading) return <LayoutApp>Cargando</LayoutApp>;

  if (!session || !session.token)
    return (
      <LayoutApp verticallyCenterContent>
        <AccessDenied />
      </LayoutApp>
    );

  return (
    <LayoutApp title='Mi lista'>
      <QueueList />
    </LayoutApp>
  );
};

export default MyList;
