import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAuthMethods } from '@contexts/Auth/hooks';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { HelperText } from '@components/Form/HelperText';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { useForm } from '@hooks/useForm';
import { loginSchema } from '@utils/yupSchemas';

export const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const { logIn } = useAuthMethods();

  const {
    errors,
    isValidForm,
    values,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, helpers) => {
      try {
        await logIn(values.email, values.password);
        helpers.setSubmitting(false);
        router.replace('/');
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Title level='3' colorScheme='white'>
        Iniciar Sesión
      </Title>
      <Spacing size={8} />
      <Text colorScheme='secondary'>
        ¿Ya tienes una cuenta? Inicia sesión más abajo.
      </Text>
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
