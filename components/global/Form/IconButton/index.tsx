import React, { forwardRef } from 'react';
import { ButtonBaseTypeMap } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';
import { IconButtonRoot } from './styled';

export const IconButton: ComponentWithRef<IconButtonTypeMap> = forwardRef(
  ({ size, children, ...rest }, ref) => (
    <IconButtonRoot {...rest} size={size} ref={ref}>
      {children}
    </IconButtonRoot>
  )
);

type IconButtonTypeMap = {
  props: {
    as?: React.ElementType | string;
    size?: 'sm' | 'md' | 'lg';
  } & ButtonBaseTypeMap['props'];
  element: 'button';
};

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};
