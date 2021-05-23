import React from 'react';
import Link from 'next/link';
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
  const { serieId } = React.useContext(Context);

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
      <Title white margin='12px 0 0 0'>
        {name}
      </Title>
      <Title margin='2px 0 0 0'>Episodeo {order}</Title>
    </div>
  );
};
