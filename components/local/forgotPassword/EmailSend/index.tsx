import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Spacing } from '@components/Layout/Spacing';

export const EmailSend = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/emailOpen.png' />
    <Typography as='h3' white>
      Revisa tu email
    </Typography>
    <Spacing size={12} />
    <Typography>
      Hemos enviado instrucciones de recuperación de contraseña a su correo
      electrónico
    </Typography>
  </div>
);
