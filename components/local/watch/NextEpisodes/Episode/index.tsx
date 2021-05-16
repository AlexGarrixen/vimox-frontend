import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import { Root, ThumbnailBox } from './styled';

type EpisodeProps = {
  name: string;
  thumbnail: string;
  order: number;
};

export const Episode = ({ name, thumbnail, order }: EpisodeProps) => (
  <Root>
    <ThumbnailBox>
      <Image src={thumbnail} alt='img_episode' />
    </ThumbnailBox>
    <Typography as='h6' white margin='12px 0 2px 0'>
      {name}
    </Typography>
    <Typography>Episodio {order}</Typography>
  </Root>
);
