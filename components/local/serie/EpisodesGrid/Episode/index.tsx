import React from 'react';
import Link from 'next/link';
import { Spacing } from '@components/Layout/Spacing';
import { Play } from '@components/Icon/Play';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Context } from '../../Provider';
import { ThumbnailBox, Thumbnail, PlayButton, Title } from './styled';

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
              <Play color='#fff' xxxl />
            </PlayButton>
          </ThumbnailBox>
        </a>
      </Link>
      <Spacing size={12} />
      <Title white>{name}</Title>
      <Spacing size={2} />
      <Title>Episodeo {order}</Title>
    </div>
  );
};
