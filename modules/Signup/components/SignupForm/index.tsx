import React from 'react';
import { Input } from '@components/Form/Input';
import { Button } from '@components/Form/Button';
import { HelperText } from '@components/Form/HelperText';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import useFormSignup from '@modules/Signup/hooks/useFormSignup';

const SignupForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    isValidForm,
  } = useFormSignup();

  return (
    <form onSubmit={handleSubmit} autoComplete='nope'>
      <Title level='3' colorScheme='white'>
        Inscríbase para empezar a disfrutar
      </Title>
      <Spacing size={8} />
      <Text colorScheme='secondary'>¡Únete a Vimox! ¡Se tarda un clic!</Text>
      <Spacing size={28} />
      <Grid cols={1} gap={2}>
        <div>
          <Input
            type='text'
            placeholder='Nombre de usuario'
            name='username'
            value={values.username}
            error={Boolean(errors.username)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.username && <HelperText error>{errors.username}</HelperText>}
        </div>
        <div>
          <Input
            type='email'
            placeholder='Tu correo'
            name='email'
            value={values.email}
            error={Boolean(errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {errors.email && <HelperText error>{errors.email}</HelperText>}
        </div>
        <div>
          <Input
            type='password'
            name='password'
            placeholder='Tu contraseña'
            showPasswordStrengthBar
            value={values.password}
            error={Boolean(errors.password)}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <HelperText error>{errors.password}</HelperText>}
        </div>
        <div>
          <Input
            type='password'
            placeholder='Confirmar contraseña'
            name='passwordConfirmation'
            value={values.passwordConfirmation}
            error={Boolean(errors.passwordConfirmation)}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.passwordConfirmation && (
            <HelperText error>{errors.passwordConfirmation}</HelperText>
          )}
        </div>
        <Button type='submit' disabled={!isValidForm || isSubmitting}>
          Crear una cuenta
        </Button>
      </Grid>
    </form>
  );
};

export default SignupForm;
