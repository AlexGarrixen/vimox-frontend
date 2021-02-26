import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Image } from '@components/DataDisplay/Image';
import { EpisodeBox, ThumbnailBox } from './styled';

export const Episode = () => (
  <EpisodeBox>
    <ThumbnailBox>
      <Image src='/placeholderImage.svg' />
    </ThumbnailBox>
    <div>
      <Typography as='h6' white margin='0 0 2px 0'>
        TITULO DEL ANIME
      </Typography>
      <Typography>Titulo del episodeo</Typography>
    </div>
  </EpisodeBox>
);
