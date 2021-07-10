import React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import ForgotPasswordModule from '@modules/ForgotPassword';

const ForgotPassword = (): JSX.Element => (
  <LayoutApp title='Olvidaste tu contraseña'>
    <ForgotPasswordModule />
  </LayoutApp>
);

export default ForgotPassword;
