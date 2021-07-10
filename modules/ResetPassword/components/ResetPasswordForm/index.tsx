import React from 'react';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Button } from '@components/Form/Button';
import { Input } from '@components/Form/Input';
import { HelperText } from '@components/Form/HelperText';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import useResetPasswordForm from '@modules/ResetPassword/hooks/useResetPassword';

const ResetPasswordForm = ({ onSuccess }: FormProps) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValidForm,
    isSubmitting,
  } = useResetPasswordForm({ onSuccess });

  return (
    <div>
      <Title level='3' colorScheme='white'>
        Crea una nueva contraseña
      </Title>
      <Spacing size={12} />
      <Text colorScheme='secondary'>
        Su nueva contraseña debe ser diferente de las contraseñas de uso
        anterior
      </Text>
      <Spacing size={24} />
      <form onSubmit={handleSubmit}>
        <Grid cols={1} gap={1.5}>
          <div>
            <Input
              placeholder='Tu nueva contraseña'
              fullWidth
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              showPasswordStrengthBar
            />
            {errors.password && (
              <HelperText error>{errors.password}</HelperText>
            )}
          </div>
          <div>
            <Input
              placeholder='Verifica tu contraseña'
              fullWidth
              name='passwordConfirmation'
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
            />
            {errors.passwordConfirmation && (
              <HelperText error>{errors.passwordConfirmation}</HelperText>
            )}
          </div>
          <Button
            fullWidth
            type='submit'
            disabled={!isValidForm || isSubmitting}
          >
            Restablecer contraseña
          </Button>
        </Grid>
      </form>
    </div>
  );
};

type FormProps = {
  onSuccess?: () => void;
};

export default ResetPasswordForm;
