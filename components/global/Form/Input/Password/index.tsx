import React, { forwardRef } from 'react';
import { InputBase, InputBaseTypeMap } from '@components/Form/InputBase';
import { EyeOpenOutlined } from '@components/Icon/EyeOpenOutlined';
import { EyeSlashOutlined } from '@components/Icon/EyeSlashOutlined';
import { PasswordStrengthBar } from '@components/Feedback/PasswordStrengthBar';
import { ComponentWithRef } from '@globalTypes/component';
import { InputPasswordBox } from './styled';

export const InputPassword: ComponentWithRef<InputPasswordTypeMap> = forwardRef(
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

type InputPasswordTypeMap = {
  props: {
    showPasswordStrengthBar?: boolean;
  } & InputBaseTypeMap['props'];
  element: 'input';
};

InputPassword.displayName = 'InputPassword';
