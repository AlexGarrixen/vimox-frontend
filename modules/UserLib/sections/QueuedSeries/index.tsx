import React from 'react';
import { Container } from '@components/Layout/Container';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import QueuedSeriesGrid from '@modules/UserLib/components/QueuedSeriesGrid';
import Skeleton from '@modules/UserLib/components/QueuedSeriesSkeleton';
import useQueuedSeries from '@modules/UserLib/hooks/useQueuedSeries';

const QueuedSeries = () => {
  const { data, isLoading, error, refetch } = useQueuedSeries();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;
  if (!data?.length)
    return (
      <Container>
        <Title level='4' colorScheme='white'>
          !Añade una serie a tu lista!
        </Title>
      </Container>
    );
  return (
    <Container>
      <Title level='4' colorScheme='white'>
        Continua mirando
      </Title>
      <Spacing size={32} />
      <QueuedSeriesGrid />
    </Container>
  );
};

export default QueuedSeries;
