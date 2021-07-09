import React from 'react';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import Cover from '@modules/Home/components/LatestSeriesCover';
import Carousel from '@modules/Home/components/LatestSeriesCarousel';
import NavigationCarousel from '@modules/Home/components/LatestSeriesNavCarousel';
import Skeleton from '@modules/Home/components/LatestSeriesSkeleton';
import useLatestSeries from '@modules/Home/hooks/useLatestSeries';
import { ProviderHomeSlidesControl } from '@modules/Home/contexts/HomeSlidesControl';
import { Wrapper, ContainerStyled } from './styled';

const LatestSeries = () => {
  const { isLoading, error, refetch } = useLatestSeries();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;
  return (
    <ProviderHomeSlidesControl>
      <Wrapper>
        <Cover />
        <ContainerStyled>
          <Carousel />
          <Spacing size={32} />
          <Title level='4' colorScheme='white'>
            Ultimas series
          </Title>
          <Spacing size={12} />
          <NavigationCarousel />
        </ContainerStyled>
      </Wrapper>
    </ProviderHomeSlidesControl>
  );
};

export default LatestSeries;
