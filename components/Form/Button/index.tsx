import React from 'react';
import { StyledButton, StartIcon, EndIcon, LabelText } from './styled';

export type ButtonProps = {
  primary?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  margin?: string;
  onClick?: (e: React.MouseEvent) => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Button = React.forwardRef(
  (
    {
      children,
      startIcon,
      endIcon,
      margin,
      primary,
      onClick,
      fullWidth,
      disabled,
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <StyledButton
        ref={ref}
        primary={primary}
        margin={margin}
        onClick={onClick}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {startIcon && <StartIcon>{startIcon}</StartIcon>}
        <LabelText primary={primary} disabled={disabled}>
          {children}
        </LabelText>
        {endIcon && <EndIcon>{endIcon}</EndIcon>}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
