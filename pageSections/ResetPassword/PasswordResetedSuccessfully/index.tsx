import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';

export const PasswordResetedSuccessfully = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/verifiedBadge.png' />
    <Typography as='h3' white>
      ¡Tu contraseña ha sido restablecida!
    </Typography>
    <Typography margin='12px 0 0 0'>Ahora puedes iniciar sesión</Typography>
  </div>
);
