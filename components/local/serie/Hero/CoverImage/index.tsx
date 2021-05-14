import React from 'react';
import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

const Root = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

type CoverImageProps = {
  src?: string;
};

export const CoverImage = ({ src }: CoverImageProps) => <Root src={src} />;
