import React from 'react';
import { ButtonBaseProps } from '@components/Form/ButtonBase';
import { ComponentWithRef } from '@globalTypes/component';
import { IconButtonRoot } from './styled';

type IconButtonProps = {
  props: {
    as?: React.ElementType | string;
    size?: 'sm' | 'md' | 'lg';
  } & ButtonBaseProps['props'];
  element: 'button';
};

export const IconButton: ComponentWithRef<IconButtonProps> = React.forwardRef(
  ({ size, children, ...rest }, ref) => (
    <IconButtonRoot {...rest} size={size} ref={ref}>
      {children}
    </IconButtonRoot>
  )
);

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};
