import React from 'react';
import { ProgressBar } from '../ProgressBar';
import { usePasswordStrength } from './hook';

type PasswordStrengthBarProps = {
  password?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const PasswordStrengthBar = ({
  password,
  className,
  style,
}: PasswordStrengthBarProps): JSX.Element => {
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

export default PasswordStrengthBar;
