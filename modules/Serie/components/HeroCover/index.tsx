import React from 'react';
import { ImageStyled } from './styled';

const CoverSerie = ({ src }: CoverProps) => <ImageStyled src={src} />;

type CoverProps = {
  src?: string;
};

export default CoverSerie;
