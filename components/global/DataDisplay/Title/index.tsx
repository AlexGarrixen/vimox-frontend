import React from 'react';
import { Component } from '@globalTypes/component';
import {
  TypographyBase,
  TypographyTypeMap,
} from '@components/DataDisplay/TypographyBase';

const levels = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
};

export const Title: Component<TitleTypeMap> = ({ as, level, ...rest }) => {
  const fallbackAs = levels['1'];

  return <TypographyBase as={as || levels[level] || fallbackAs} {...rest} />;
};

type TitleTypeMap = {
  props: {
    level?: '1' | '2' | '3' | '4' | '5' | '6';
  } & TypographyTypeMap['props'];
  element: 'h1';
};
