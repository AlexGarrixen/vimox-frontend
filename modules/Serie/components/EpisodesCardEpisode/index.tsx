import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Spacing } from '@components/Layout/Spacing';
import { PlayOutlined } from '@components/Icon/PlayOutlined';
import { Truncate } from '@components/DataDisplay/Truncate';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { AspectRatio } from '@components/Layout/AspectRatio';
import useSerie from '@modules/Serie/hooks/useSerie';
import { ThumbnailBox, Thumbnail, PlayButton } from './styled';

const Episode = ({ id, name, thumbnail, order }: EpisodeProps) => {
  const { data: serie } = useSerie();

  return (
    <div>
      <Link
        href={`/watch/${slugify(name)}?serieId=${serie._id}&episodeId=${id}`}
      >
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

type EpisodeProps = {
  id: string;
  thumbnail: string;
  name: string;
  order: number;
};

export default Episode;
