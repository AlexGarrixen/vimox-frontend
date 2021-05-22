import React from 'react';
import Link from 'next/link';
import { Typography } from '@components/DataDisplay/Typography';
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
            <Typography as='h6' white margin='0 0 2px 0'>
              {serie.toUpperCase()}
            </Typography>
          </Truncate>
          <Truncate>
            <Typography>{name}</Typography>
          </Truncate>
        </div>
      </Root>
    </a>
  </Link>
);
