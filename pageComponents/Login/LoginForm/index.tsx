import React from 'react';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { HelperText } from '@components/Form/HelperText';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';
import { useForm } from '@hooks/useForm';
import { loginSchema } from '@utils/yupSchemas';

export const LoginForm = (): JSX.Element => {
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
    onSubmit: (values, helpers) => {
      console.log(values, helpers);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Typography as='h3' margin='0 0 8px 0' white>
        Iniciar Sesión
      </Typography>
      <Typography margin='0 0 28px 0'>
        ¿Ya tienes una cuenta? Inicia sesión más abajo.
      </Typography>
      <Grid cols='1' gap={2}>
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
          {errors.password && <HelperText error>{errors.password}</HelperText>}
        </div>
        <Button primary type='submit' disabled={!isValidForm || isSubmitting}>
          Iniciar sesion
        </Button>
      </Grid>
    </form>
  );
};
