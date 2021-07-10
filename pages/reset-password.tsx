import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import ResetPasswordModule from '@modules/ResetPassword';

const ResetPassword = (): JSX.Element => (
  <LayoutApp title='Restablecer contraseña'>
    <ResetPasswordModule />
  </LayoutApp>
);

export default ResetPassword;
