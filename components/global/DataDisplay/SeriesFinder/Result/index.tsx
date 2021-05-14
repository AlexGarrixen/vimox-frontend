import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
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
      <Typography as='h6' size='sm' white>
        {name.toUpperCase()}
      </Typography>
      <Typography>{totalEpisodes} episodeos</Typography>
    </ContentBox>
  </ResultBox>
);
