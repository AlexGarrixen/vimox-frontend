import React from 'react';
import { ProgressBar } from '../ProgressBar';
import { usePasswordStrength } from './hook';
import { Component } from '@globalTypes/component';

export const PasswordStrengthBar: Component<PasswordStrengthTypeMap> = ({
  password,
  className,
  style,
}) => {
  const { value, isSuccess, isWarning, isDanger } = usePasswordStrength(
    password
  );

  return (
    <ProgressBar
      style={style}
      className={className}
      value={value}
      success={isSuccess}
      danger={isDanger}
      warning={isWarning}
    />
  );
};

type PasswordStrengthTypeMap = {
  props: {
    password?: string;
  };
  element: 'div';
};

export default PasswordStrengthBar;
