import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import { SerieBox, ThumbnailBox, ContentBox } from './styled';

export const Serie = () => (
  <SerieBox>
    <ThumbnailBox>
      <Image src='/placeholderImage.svg' />
    </ThumbnailBox>
    <ContentBox>
      <Typography as='h6' white>
        TITULO DE SERIE
      </Typography>
      <Typography>2 Eps - 60 Minutos</Typography>
    </ContentBox>
  </SerieBox>
);
