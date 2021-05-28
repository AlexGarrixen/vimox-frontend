import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Spacing } from '@components/Layout/Spacing';

export const PasswordResetedSuccessfully = (): JSX.Element => (
  <div style={{ textAlign: 'center' }}>
    <img src='/verifiedBadge.png' />
    <Typography as='h3' white>
      ¡Tu contraseña ha sido restablecida!
    </Typography>
    <Spacing size={12} />
    <Typography>Ahora puedes iniciar sesión</Typography>
  </div>
);
