import React from 'react';
import { Title } from '@components/DataDisplay/Title';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { TrailAnimation } from '@components/Animation/Trail';
import Cover from '@modules/Serie/components/HeroCover';
import Genders from '@modules/Serie/components/HeroGenders';
import Duration from '@modules/Serie/components/HeroDuration';
import Sinopsis from '@modules/Serie/components/HeroSinopsis';
import ButtonAddQueue from '@modules/Serie/components/HeroButtonAddQueue';
import Skeleton from '@modules/Serie/components/HeroSkeleton';
import useSerie from '@modules/Serie/hooks/useSerie';
import { Wrapper, InformationBox } from './styled';

const Hero = () => {
  const { data, isLoading, error, refetch } = useSerie();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;
  if (!data) return null;
  return (
    <Wrapper>
      <Cover src={data.bannerImage} />
      <Container>
        <TrailAnimation animation='fadeSlideUp' show delay={700}>
          <Title
            level='2'
            colorScheme='white'
            size={{ xs: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            style={{ marginBottom: 18 }}
          >
            {data.name?.toUpperCase()}
          </Title>
          <InformationBox>
            <Genders geners={data.geners} />
            <Duration duration={data.duration} />
          </InformationBox>
          <Sinopsis text={data.sinopsis} />
          <ButtonAddQueue isInQueue={data.isInQueue} />
        </TrailAnimation>
      </Container>
    </Wrapper>
  );
};

export default Hero;
