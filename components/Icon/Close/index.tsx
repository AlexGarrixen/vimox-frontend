import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const Close = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M810.667 273.493l-60.16-60.16L512 451.84 273.493 213.333l-60.16 60.16L451.84 512 213.333 750.507l60.16 60.16L512 572.16l238.507 238.507 60.16-60.16L572.16 512z' />
  </Svg>
);
