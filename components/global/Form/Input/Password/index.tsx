import React from 'react';
import styled from 'styled-components';
import { InputBase, InputBaseProps } from '@components/Form/InputBase';
import { Eye } from '@components/Icon/Eye';
import { EyeSlash } from '@components/Icon/EyeSlash';
import { PasswordStrengthBar } from '@components/Feedback/PasswordStrengthBar';
import { ComponentWithRef } from '@globalTypes/component';

const InputPasswordBox = styled.div<{ fullWidth?: boolean }>`
  display: inline-block;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
`;

type InputPasswordProps = {
  props: {
    showPasswordStrengthBar?: boolean;
  } & InputBaseProps['props'];
  element: 'input';
};

export const InputPassword: ComponentWithRef<InputPasswordProps> = React.forwardRef(
  (
    { type: typeProp, value, showPasswordStrengthBar, fullWidth, ...rest },
    ref
  ) => {
    const [type, setType] = React.useState(typeProp);

    return (
      <InputPasswordBox fullWidth={fullWidth}>
        <InputBase
          {...rest}
          type={type}
          fullWidth={fullWidth}
          adornment={
            type === 'password' ? (
              <Eye onClick={() => setType('text')} />
            ) : (
              <EyeSlash onClick={() => setType('password')} />
            )
          }
          ref={ref}
        />
        {showPasswordStrengthBar && (
          <PasswordStrengthBar password={value} style={{ marginTop: 10 }} />
        )}
      </InputPasswordBox>
    );
  }
);

InputPassword.displayName = 'InputPassword';
