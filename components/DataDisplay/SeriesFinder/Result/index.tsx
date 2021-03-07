import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { ResultBox, Thumbnail, ContentBox } from './styled';

export const Result = () => (
  <ResultBox>
    <Thumbnail src='placeholderImage.svg' />
    <ContentBox>
      <Typography as='h6' size='sm' white>
        TITULO DE ANIME
      </Typography>
      <Typography>total de episodeos</Typography>
    </ContentBox>
  </ResultBox>
);
