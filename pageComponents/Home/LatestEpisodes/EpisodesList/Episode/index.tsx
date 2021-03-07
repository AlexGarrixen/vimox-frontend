import React from 'react';
import Link from 'next/link';
import { Typography } from '@components/DataDisplay/Typography';
import { Image } from '@components/DataDisplay/Image';
import { EpisodeBox, ThumbnailBox } from './styled';

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
  <Link href={`/watch/${serieId}/${id}`}>
    <a>
      <EpisodeBox>
        <ThumbnailBox>
          <Image src={thumbnail} />
        </ThumbnailBox>
        <div>
          <Typography as='h6' white margin='0 0 2px 0'>
            {serie.toUpperCase()}
          </Typography>
          <Typography>{name}</Typography>
        </div>
      </EpisodeBox>
    </a>
  </Link>
);
