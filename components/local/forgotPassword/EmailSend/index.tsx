import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';

export const EmailSend = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/emailOpen.png' />
    <Typography as='h3' white margin='0 0 12px 0'>
      Revisa tu email
    </Typography>
    <Typography>
      Hemos enviado instrucciones de recuperación de contraseña a su correo
      electrónico
    </Typography>
  </div>
);
