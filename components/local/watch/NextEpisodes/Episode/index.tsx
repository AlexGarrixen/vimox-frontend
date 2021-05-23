import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import { Truncate } from '@components/DataDisplay/Truncate';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { ThumbnailBox } from './styled';

type EpisodeProps = {
  name: string;
  thumbnail: string;
  order: number;
};

export const Episode = ({ name, thumbnail, order }: EpisodeProps) => (
  <div>
    <ThumbnailBox>
      <AspectRatio ratio='16:9'>
        <Image src={thumbnail} alt='img_episode' />
      </AspectRatio>
    </ThumbnailBox>
    <Truncate>
      <Typography as='h6' white margin='12px 0 2px 0'>
        {name}
      </Typography>
    </Truncate>
    <Typography>Episodio {order}</Typography>
  </div>
);
