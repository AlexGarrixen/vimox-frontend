import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';
import { Truncate } from '@components/DataDisplay/Truncate';
import { Image } from '@components/DataDisplay/Image';
import { Wrapper, ThumbnailBox } from './styled';

const Episode = ({ id, serieId, name, serie, thumbnail }: EpisodeProps) => (
  <Link href={`/watch/${slugify(name)}?serieId=${serieId}&episodeId=${id}`}>
    <Wrapper>
      <ThumbnailBox>
        <Image src={thumbnail} />
      </ThumbnailBox>
      <div>
        <Truncate>
          <Title level='6' colorScheme='white'>
            {serie.toUpperCase()}
          </Title>
        </Truncate>
        <Spacing size={2} />
        <Truncate>
          <Text colorScheme='secondary'>{name}</Text>
        </Truncate>
      </div>
    </Wrapper>
  </Link>
);

type EpisodeProps = {
  id: string;
  serieId: string;
  name: string;
  serie: string;
  thumbnail: string;
};

export default Episode;
