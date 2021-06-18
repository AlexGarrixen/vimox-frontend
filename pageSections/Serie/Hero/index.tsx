import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Container } from '@components/Layout/Container';
import { TrailAnimation } from '@components/Animation/Trail';
import { ButtonAddQueue } from '@localComponents/serie/Hero/ButtonAddQueue';
import { CoverImage } from '@localComponents/serie/Hero/CoverImage';
import { Geners } from '@localComponents/serie/Hero/Geners';
import { Sinopsis } from '@localComponents/serie/Hero/Sinopsis';
import { Duration } from '@localComponents/serie/Hero/Duration';
import { Context } from '@localComponents/serie/Provider';
import { Root, InformationBox } from './styled';

export const Hero = () => {
  const {
    name,
    bannerImage,
    geners,
    duration,
    sinopsis,
    isInQueue,
  } = React.useContext(Context);

  return (
    <Root>
      <CoverImage src={bannerImage} />
      <Container>
        <TrailAnimation animation='fadeSlideUp' show delay={700}>
          <Title
            level='2'
            colorScheme='white'
            size={{ xs: '3xl', md: '4xl', lg: '5xl' }}
            style={{ marginBottom: 18 }}
          >
            {name?.toUpperCase()}
          </Title>
          <InformationBox>
            <Geners geners={geners} />
            <Duration duration={duration} />
          </InformationBox>
          <Sinopsis text={sinopsis} />
          <ButtonAddQueue isInQueue={isInQueue} />
        </TrailAnimation>
      </Container>
    </Root>
  );
};
