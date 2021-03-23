import React from 'react';
import { Adornment } from '../Adornment';
import { Eye } from '@components/Icon/Eye';
import { EyeSlash } from '@components/Icon/EyeSlash';
import { PasswordStrengthBar } from '@components/Feedback/PasswordStrengthBar';
import type { InputProps } from '../index';
import { InputBox, InputStyled } from '../styled';

export const InputPassword = ({
  fullWidth,
  type: typeProp,
  showPasswordStrengthBar,
  value,
  error,
  ...rest
}: InputProps): JSX.Element => {
  const [type, setType] = React.useState('password');

  const handleClickAdornment = React.useCallback(() => {
    if (type === 'password') setType('text');
    else if (type === 'text') setType('password');
  }, [type]);

  return (
    <InputBox fullWidth={fullWidth}>
      <InputBox fullWidth={fullWidth} error={error}>
        <InputStyled {...rest} type={type} value={value} />
        <Adornment onClick={handleClickAdornment}>
          {type === 'password' ? <Eye lg /> : <EyeSlash lg />}
        </Adornment>
      </InputBox>
      {showPasswordStrengthBar && (
        <PasswordStrengthBar
          style={{ marginTop: 10 }}
          password={value as string}
        />
      )}
    </InputBox>
  );
};
