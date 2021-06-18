import React from 'react';
import Link from 'next/link';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';
import { Truncate } from '@components/DataDisplay/Truncate';
import { Image } from '@components/DataDisplay/Image';
import { Root, ThumbnailBox } from './styled';

type EpisodeProps = {
  id: string;
  serieId: string;
  name: string;
  serie: string;
  thumbnail: string;
};

export const Episode = ({
  id,
  serieId,
  name,
  serie,
  thumbnail,
}: EpisodeProps) => (
  <Link href={`/watch?serieId=${serieId}&episodeId=${id}`}>
    <a>
      <Root>
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
      </Root>
    </a>
  </Link>
);
