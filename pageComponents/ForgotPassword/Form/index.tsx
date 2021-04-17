import React from 'react';
import * as Yup from 'yup';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { HelperText } from '@components/Form/HelperText';
import { Typography } from '@components/DataDisplay/Typography';
import { useForm } from '@hooks/useForm';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('No es un email valido')
    .required('El email es requerido'),
});

export const Form = (): JSX.Element => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidForm,
    isSubmitting,
  } = useForm({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: (values, helpers) => {
      console.log(values);
    },
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <img src='/forgot-password.png' />
      <Typography as='h3' white>
        ¿Olvidaste tu contraseña?
      </Typography>
      <Typography margin='12px 0 24px 0'>
        Ingrese el correo electrónico asociado a su cuenta y le enviaremos un
        correo electrónico con instrucciones para restablecer su contraseña
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Tu email'
          fullWidth
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <HelperText error>{errors.email}</HelperText>}
        <Button
          primary
          fullWidth
          type='submit'
          margin='18px 0 0 0'
          disabled={!isValidForm || isSubmitting}
        >
          Enviar instrucciones
        </Button>
      </form>
    </div>
  );
};
