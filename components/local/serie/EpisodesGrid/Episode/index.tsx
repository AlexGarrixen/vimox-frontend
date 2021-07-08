import React from 'react';
import Link from 'next/link';
import { Spacing } from '@components/Layout/Spacing';
import { PlayOutlined } from '@components/Icon/PlayOutlined';
import { Truncate } from '@components/DataDisplay/Truncate';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Context } from '../../Provider';
import { ThumbnailBox, Thumbnail, PlayButton } from './styled';

type EpisodeProps = {
  id: string;
  thumbnail: string;
  name: string;
  order: number;
};

export const Episode = ({ id, name, thumbnail, order }: EpisodeProps) => {
  const { _id: serieId } = React.useContext(Context);

  return (
    <div>
      <Link href={`/watch?serieId=${serieId}&episodeId=${id}`}>
        <a>
          <ThumbnailBox>
            <AspectRatio ratio='16:9'>
              <Thumbnail src={thumbnail} />
            </AspectRatio>
            <PlayButton>
              <PlayOutlined colorScheme='white' size='3x' />
            </PlayButton>
          </ThumbnailBox>
        </a>
      </Link>
      <Spacing size={12} />
      <Truncate>
        <Title size='base' colorScheme='white'>
          {name}
        </Title>
      </Truncate>
      <Spacing size={2} />
      <Truncate>
        <Text colorScheme='secondary'>Episodio {order}</Text>
      </Truncate>
    </div>
  );
};
