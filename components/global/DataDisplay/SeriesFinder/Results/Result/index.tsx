import React, { FC } from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Truncate } from '@components/DataDisplay/Truncate';
import { ResultBox, Thumbnail, ContentBox } from './styled';

export const Result: FC<ResultProps> = ({ name, thumbnail, totalEpisodes }) => (
  <ResultBox>
    <Thumbnail src={thumbnail} />
    <ContentBox>
      <Truncate>
        <Title level='6' size='sm' colorScheme='white'>
          {name.toUpperCase()}
        </Title>
      </Truncate>
      <Text colorScheme='secondary'>{totalEpisodes} episodeos</Text>
    </ContentBox>
  </ResultBox>
);

type ResultProps = {
  name: string;
  thumbnail: string;
  totalEpisodes: number;
};
