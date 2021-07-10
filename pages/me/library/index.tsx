import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { AccessDenied } from '@components/Feedback/AccessDenied';
import UserLibModule from '@modules/UserLib';
import { useSession } from '@contexts/Auth/hooks';

const UserLibrary = (): JSX.Element => {
  const [session, loading] = useSession();

  return (
    <LayoutApp title='Mi biblioteca' verticallyCenterContent={!session}>
      {loading ? <div /> : !session ? <AccessDenied /> : <UserLibModule />}
    </LayoutApp>
  );
};

export default UserLibrary;
