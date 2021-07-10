import React from 'react';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { Spacing } from '@components/Layout/Spacing';
import { HelperText } from '@components/Form/HelperText';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import useForgotPasswordForm from '@modules/ForgotPassword/hooks/useForgotPasswordForm';

const ForgotPasswordForm = ({ onSuccess }: FormProps) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidForm,
    isSubmitting,
  } = useForgotPasswordForm({ onSuccess });

  return (
    <div style={{ textAlign: 'center' }}>
      <img src='/forgot-password.png' />
      <Title level='3' colorScheme='white'>
        ¿Olvidaste tu contraseña?
      </Title>
      <Spacing size={12} />
      <Text colorScheme='secondary'>
        Ingrese el correo electrónico asociado a su cuenta y le enviaremos un
        correo electrónico con instrucciones para restablecer su contraseña
      </Text>
      <Spacing size={24} />
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Tu email'
          fullWidth
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email)}
        />
        {errors.email && <HelperText error>{errors.email}</HelperText>}
        <Spacing size={18} />
        <Button fullWidth type='submit' disabled={!isValidForm || isSubmitting}>
          Enviar instrucciones
        </Button>
      </form>
    </div>
  );
};

type FormProps = {
  onSuccess?: () => void;
};

export default ForgotPasswordForm;
