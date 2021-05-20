import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Typography } from '@components/DataDisplay/Typography';
import { Bookmark } from '@components/Icon/Bookmark';
import { Serie as ISerie } from '@globalTypes/serieServices';
import { SerieBox, ThumbnailBox, ContentBox, BookmarkBox } from './styled';

type SerieProps = {
  name: string;
  thumbnail: string;
  countEpisodes: number;
  geners: ISerie['geners'];
  isInQueue?: boolean;
};

export const Serie = ({
  name,
  thumbnail,
  geners,
  countEpisodes,
  isInQueue,
}: SerieProps) => {
  return (
    <SerieBox>
      {isInQueue && (
        <BookmarkBox>
          <Bookmark sm />
        </BookmarkBox>
      )}
      <ThumbnailBox>
        <Image src={thumbnail} />
      </ThumbnailBox>
      <ContentBox>
        <Typography as='h6' white>
          {name.toUpperCase()}
        </Typography>
        {Array.isArray(geners) && (
          <Typography>{geners.map(({ name }) => name).join(', ')}</Typography>
        )}
        <Typography>{`${countEpisodes} ${
          countEpisodes === 1 ? 'Video' : 'Videos'
        }`}</Typography>
      </ContentBox>
    </SerieBox>
  );
};
