import React from 'react';
import Link from 'next/link';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { HelperText } from '@components/Form/HelperText';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import useLoginForm from '@modules/Login/hooks/useFormLogin';

const LoginForm = () => {
  const {
    errors,
    isValidForm,
    values,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
      <Title level='3' colorScheme='white'>
        Iniciar Sesión
      </Title>
      <Spacing size={8} />
      <Link href='/signup'>
        <Text colorScheme='secondary' as='a'>
          ¿No tienes una cuenta?{' '}
          <Text as='span' colorScheme='primary' style={{ cursor: 'pointer' }}>
            Registrate aqui.
          </Text>
        </Text>
      </Link>
      <Spacing size={28} />
      <Grid cols={1} gap={2}>
        <div>
          <Input
            type='email'
            placeholder='Tu correo'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.email)}
            fullWidth
          />
          {errors.email && <HelperText error>{errors.email}</HelperText>}
        </div>
        <div>
          <Input
            type='password'
            placeholder='Tu contraseña'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(errors.password)}
            fullWidth
          />
          <Link href='/forgot-password'>
            <a>
              <HelperText colorScheme='white' style={{ textAlign: 'right' }}>
                ¿Olvidaste tu contraseña?
              </HelperText>
            </a>
          </Link>
          {errors.password && <HelperText error>{errors.password}</HelperText>}
        </div>
        <Button type='submit' disabled={!isValidForm || isSubmitting}>
          Iniciar sesion
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
