import React from 'react';
import { Component } from '@globalTypes/component';
import {
  TypographyBase,
  TypographyProps,
} from '@components/DataDisplay/TypographyBase';

type TitleProps = {
  props: {
    level?: '1' | '2' | '3' | '4' | '5' | '6';
  } & TypographyProps['props'];
  element: 'h1';
};

const levels = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
};

export const Title: Component<TitleProps> = ({ as, level, ...rest }) => {
  const fallbackAs = levels['1'];

  return <TypographyBase as={as || levels[level] || fallbackAs} {...rest} />;
};
