import React from 'react';
import styled from 'styled-components';
import { InputBase, InputBaseProps } from '@components/Form/InputBase';
import { EyeOpenOutlined } from '@components/Icon/EyeOpenOutlined';
import { EyeSlashOutlined } from '@components/Icon/EyeSlashOutlined';
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
              <EyeOpenOutlined
                onClick={() => setType('text')}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <EyeSlashOutlined
                onClick={() => setType('password')}
                style={{ cursor: 'pointer' }}
              />
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
