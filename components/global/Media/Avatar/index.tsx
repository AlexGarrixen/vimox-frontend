import React, { forwardRef } from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { extractFirstLetter } from './helpers';
import { AvatarRoot, Media, Letter } from './styled';

export const Avatar: ComponentWithRef<AvatarTypeMap> = forwardRef(
  ({ children, bgColor, src, size, imgProps = {}, ...rest }, ref) => (
    <AvatarRoot ref={ref} bgColor={bgColor} size={size} {...rest}>
      {src ? (
        <Media {...imgProps} src={src} />
      ) : (
        <Letter>
          {typeof children === 'string'
            ? extractFirstLetter(children)
            : children}
        </Letter>
      )}
    </AvatarRoot>
  )
);

export type AvatarTypeMap = {
  props: {
    bgColor?: string;
    children?: React.ReactNode | string;
    size?: 'sm' | 'md' | 'lg' | number;
    src?: string;
    imgProps?: Omit<React.ComponentPropsWithRef<'img'>, 'src'>;
  };
  element: 'div';
};

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  bgColor: 'primary',
  size: 'md',
};
