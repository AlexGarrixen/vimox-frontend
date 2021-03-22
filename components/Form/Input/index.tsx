import React from 'react';
import { InputPassword } from './Password';
import { InputBox, InputStyled } from './styled';

export type OwnProps = {
  fullWidth?: boolean;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  value?: string | number | readonly string[];
  name?: string;
  showPasswordStrengthBar?: boolean;
  error?: boolean;
};

export type InputProps = OwnProps & {
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    keyof OwnProps
  >;
};

export const Input = ({
  fullWidth,
  type = 'text',
  value,
  name,
  placeholder,
  error,
  onBlur,
  onChange,
  onFocus,
  showPasswordStrengthBar,
  inputProps,
}: InputProps): JSX.Element => {
  const props = {
    fullWidth,
    type,
    value,
    name,
    placeholder,
    error,
    onBlur,
    onChange,
    onFocus,
  };

  if (type === 'password')
    return (
      <InputPassword
        {...inputProps}
        {...props}
        showPasswordStrengthBar={showPasswordStrengthBar}
      />
    );

  return (
    <InputBox fullWidth={fullWidth} error={error}>
      <InputStyled
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...inputProps}
      />
    </InputBox>
  );
};
