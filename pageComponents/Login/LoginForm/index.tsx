import React from 'react';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';

export const LoginForm = (): JSX.Element => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Typography as='h3' margin='0 0 8px 0' white>
      Iniciar Sesión
    </Typography>
    <Typography margin='0 0 28px 0'>
      ¿Ya tienes una cuenta? Inicia sesión más abajo.
    </Typography>
    <Grid cols='1' gap={2}>
      <Input type='email' placeholder='Tu correo' />
      <Input type='password' placeholder='Tu contraseña' fullWidth />
      <Button primary>Iniciar sesion</Button>
    </Grid>
  </form>
);
