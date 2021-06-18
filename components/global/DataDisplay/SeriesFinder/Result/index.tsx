import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { Truncate } from '@components/DataDisplay/Truncate';
import { ResultBox, Thumbnail, ContentBox } from './styled';

type ResultProps = {
  name: string;
  thumbnail: string;
  totalEpisodes: number;
};

export const Result = ({ name, thumbnail, totalEpisodes }: ResultProps) => (
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
