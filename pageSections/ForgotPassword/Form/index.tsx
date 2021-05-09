import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { HelperText } from '@components/Form/HelperText';
import { Typography } from '@components/DataDisplay/Typography';
import { EmailSend } from '../EmailSend';
import { useForm } from '@hooks/useForm';
import { forgotPassword } from '@services/auth';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('No es un email valido')
    .required('El email es requerido'),
});

export const Form = (): JSX.Element => {
  const [isSuccessfully, setSuccessfully] = React.useState(false);

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
        setSuccessfully(true);
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return isSuccessfully ? (
    <EmailSend />
  ) : (
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
