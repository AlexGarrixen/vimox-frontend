import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
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
        <Typography as='h6' size='sm' white>
          {name.toUpperCase()}
        </Typography>
      </Truncate>
      <Typography>{totalEpisodes} episodeos</Typography>
    </ContentBox>
  </ResultBox>
);
