import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { Spacing } from '@components/Layout/Spacing';
import { HelperText } from '@components/Form/HelperText';
import { Typography } from '@components/DataDisplay/Typography';
import { useForm } from '@hooks/useForm';
import { forgotPassword } from '@services/auth';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('No es un email valido')
    .required('El email es requerido'),
});

type FormProps = {
  onSuccess?: () => void;
};

export const Form = ({ onSuccess }: FormProps): JSX.Element => {
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
    onSubmit: async (values, helpers) => {
      try {
        await forgotPassword(values.email);
        helpers.setSubmitting(false);
        onSuccess && onSuccess();
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <img src='/forgot-password.png' />
      <Typography as='h3' white>
        ¿Olvidaste tu contraseña?
      </Typography>
      <Spacing size={12} />
      <Typography>
        Ingrese el correo electrónico asociado a su cuenta y le enviaremos un
        correo electrónico con instrucciones para restablecer su contraseña
      </Typography>
      <Spacing size={24} />
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
        <Spacing size={18} />
        <Button
          primary
          fullWidth
          type='submit'
          disabled={!isValidForm || isSubmitting}
        >
          Enviar instrucciones
        </Button>
      </form>
    </div>
  );
};
