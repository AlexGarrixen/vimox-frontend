import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const Search = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M1017.159 1017.159a22.005 22.005 0 01-31.069 0L812.293 843.34a21.962 21.962 0 1131.047-31.047L1017.16 986.09a22.005 22.005 0 010 31.069zm-581.414-145.67a435.745 435.745 0 11435.744-435.744 435.745 435.745 0 01-435.744 435.744zm0-827.915a392.17 392.17 0 10392.17 392.17 392.17 392.17 0 00-392.17-392.17z' />
  </Svg>
);
