import React from 'react';
import { Component } from '@globalTypes/component';
import useImageLazy from './hook';
import { ImageStyled } from './styled';

export const Image: Component<ImageTypeMap> = ({ src, ...other }) => {
  const ref = useImageLazy(src);

  return <ImageStyled src='' data-src={src} ref={ref} {...other} />;
};

export type ImageTypeMap = {
  props: {
    margin?: string;
  };
  element: 'img';
};
