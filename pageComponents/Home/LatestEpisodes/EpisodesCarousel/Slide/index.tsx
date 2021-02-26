import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { Play } from '@components/Icon/Play';
import { SlideBox, ContentBox, PlayButton, ImageStyled } from './styled';

export const SlideEpisode = () => (
  <SlideBox>
    <ContentBox>
      <Typography as='h3' white>
        Name of serie
      </Typography>
      <Typography>Name of episode</Typography>
    </ContentBox>
    <PlayButton>
      <Play color='#fff' xxxl />
    </PlayButton>
    <ImageStyled src='/placeholderImage.svg' />
  </SlideBox>
);
