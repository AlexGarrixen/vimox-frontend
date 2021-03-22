import React from 'react';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';

export const SignupForm = (): JSX.Element => (
  <form onSubmit={(e) => e.preventDefault()}>
    <Typography as='h3' margin='0 0 8px 0' white>
      Inscríbase para una Cuenta Gratuita
    </Typography>
    <Typography margin='0 0 28px 0'>
      ¡Únete a GxAnime! ¡Se tarda un clic!
    </Typography>
    <Grid cols='1' gap={2}>
      <Input type='text' placeholder='Nombre de usuario' />
      <Input type='email' placeholder='Tu correo' />
      <Input
        type='password'
        placeholder='Tu contraseña'
        fullWidth
        showPasswordStrengthBar
      />
      <Input type='password' placeholder='Confirmar contraseña' fullWidth />
      <Button primary>Crear una cuenta</Button>
    </Grid>
  </form>
);
