import React from 'react';
import { InputBase, InputBaseProps } from '@components/Form/InputBase';
import { InputPassword } from './Password';
import { ComponentWithRef } from '@globalTypes/component';

const inputTypes = {
  text: InputBase,
  number: InputBase,
  password: InputPassword,
};

type InputProps = {
  props: {
    showPasswordStrengthBar?: boolean;
  } & InputBaseProps['props'];
  element: 'input';
};

export const Input: ComponentWithRef<InputProps> = React.forwardRef(
  ({ type, ...rest }, ref) => {
    const FallbackInput = inputTypes.text;
    const Component = inputTypes[type as string];

    return Component ? (
      <Component {...rest} type={type} ref={ref} />
    ) : (
      <FallbackInput {...rest} type={type} ref={ref} />
    );
  }
);

Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text',
};
