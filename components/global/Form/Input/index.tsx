import React, { forwardRef } from 'react';
import { InputBase, InputBaseTypeMap } from '@components/Form/InputBase';
import { InputPassword } from './Password';
import { ComponentWithRef } from '@globalTypes/component';

const inputTypes = {
  text: InputBase,
  number: InputBase,
  password: InputPassword,
};

export const Input: ComponentWithRef<InputTypeMap> = forwardRef(
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

type InputTypeMap = {
  props: {
    showPasswordStrengthBar?: boolean;
  } & InputBaseTypeMap['props'];
  element: 'input';
};

Input.displayName = 'Input';
Input.defaultProps = {
  type: 'text',
};
