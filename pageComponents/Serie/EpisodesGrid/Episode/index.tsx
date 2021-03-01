import React from 'react';
import { Play } from '@components/Icon/Play';
import { ThumbnailBox, Thumbnail, PlayButton, Title } from './styled';

export const Episode = () => (
  <div>
    <ThumbnailBox>
      <Thumbnail src='/placeholderImage.svg' />
      <PlayButton>
        <Play color='#fff' xxxl />
      </PlayButton>
    </ThumbnailBox>
    <Title white margin='12px 0 0 0'>
      Titulo del episodeo
    </Title>
  </div>
);
