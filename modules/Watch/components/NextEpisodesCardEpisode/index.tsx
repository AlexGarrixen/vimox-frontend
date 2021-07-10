import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Truncate } from '@components/DataDisplay/Truncate';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Spacing } from '@components/Layout/Spacing';
import { ThumbnailBox } from './styled';

const Episode = ({ name, thumbnail, order }: EpisodeProps) => (
  <div>
    <ThumbnailBox>
      <AspectRatio ratio='16:9'>
        <Image src={thumbnail} alt='img_episode' />
      </AspectRatio>
    </ThumbnailBox>
    <Spacing size={12} />
    <Truncate>
      <Title level='6' colorScheme='white'>
        {name}
      </Title>
    </Truncate>
    <Spacing size={2} />
    <Text colorScheme='secondary'>Episodio {order}</Text>
  </div>
);

type EpisodeProps = {
  name: string;
  thumbnail: string;
  order: number;
};

export default Episode;
