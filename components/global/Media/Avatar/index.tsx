import React from 'react';
import { ComponentWithRef } from '@globalTypes/component';
import { AvatarRoot, Media, Letter } from './styled';

export type AvatarProps = {
  props: {
    bgColor?: string;
    children?: React.ReactNode | string;
    size?: 'sm' | 'md' | 'lg' | number;
    src?: string;
    imgProps?: Omit<React.ComponentPropsWithRef<'img'>, 'src'>;
  };
  element: 'div';
};

const extractFirstLetter = (str: string) => str.charAt(0);

export const Avatar: ComponentWithRef<AvatarProps> = React.forwardRef(
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

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  bgColor: 'primary',
  size: 'md',
};
