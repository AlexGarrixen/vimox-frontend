import React from 'react';
import { Image } from '@components/DataDisplay/Image';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Spacing } from '@components/Layout/Spacing';
import { BookmarkOutlined } from '@components/Icon/BookmarkOutlined';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Truncate } from '../Truncate';
import { Serie as ISerie } from '@globalTypes/serieServices';
import { Component } from '@globalTypes/component';
import { SerieBox, ThumbnailBox, BookmarkBox } from './styled';

export const Serie: Component<SerieTypeMap> = ({
  name,
  thumbnail,
  geners,
  countEpisodes,
  isInQueue,
  ...rest
}) => {
  return (
    <SerieBox {...rest}>
      {isInQueue && (
        <BookmarkBox>
          <BookmarkOutlined colorScheme='white' />
        </BookmarkBox>
      )}
      <ThumbnailBox>
        <AspectRatio ratio='2:3'>
          <Image src={thumbnail} />
        </AspectRatio>
      </ThumbnailBox>
      <Spacing size={16} />
      <div>
        <Truncate>
          <Title level='6' colorScheme='white'>
            {name.toUpperCase()}
          </Title>
        </Truncate>
        {Array.isArray(geners) && (
          <Truncate>
            <Text colorScheme='secondary'>
              {geners.map((gener) => gener).join(', ')}
            </Text>
          </Truncate>
        )}
        <Text colorScheme='secondary'>
          {`${countEpisodes} ${countEpisodes === 1 ? 'Video' : 'Videos'}`}
        </Text>
      </div>
    </SerieBox>
  );
};

type SerieTypeMap = {
  props: {
    name: string;
    thumbnail: string;
    countEpisodes: number;
    geners: ISerie['geners'];
    isInQueue?: boolean;
  };
  element: 'div';
};
