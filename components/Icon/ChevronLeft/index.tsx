import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const ChevronLeft = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M359.328 489.984l2.944-3.392 2.496-2.24 247.008-249.92a34.976 34.976 0 0149.92 0c12.672 12.896 13.664 33.12 2.944 47.136l-2.976 3.392L437.28 512l224.384 227.04c12.704 12.864 13.696 33.088 2.976 47.104l-2.976 3.392a34.976 34.976 0 01-49.92 0L364.8 539.68l-2.496-2.272c-6.368-6.432-9.792-14.72-10.272-23.136v-4.512a35.84 35.84 0 017.328-19.776z' />
  </Svg>
);
