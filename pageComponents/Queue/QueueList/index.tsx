import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { useSession } from '@contexts/Auth/hooks';
import { getListOfSeries } from '@services/user';
import { Skeleton } from './Skeleton';
import { QueueSerie } from './QueueSerie';

export const QueueList = (): JSX.Element => {
  const [session, loading] = useSession();

  const { data, isLoading, error, refetch } = useQuery(
    ['user-series', session],
    () => {
      if (session) return getListOfSeries(session.user._id);
    }
  );

  const renderContent = () => {
    if (loading || isLoading) return <Skeleton />;

    if (error)
      return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;

    return (
      <>
        <Typography as='h4' white margin='0 0 32px 0'>
          Sigue mirando
        </Typography>
        <Grid xs='1' sm='2' md='3' lg='4' gap={2}>
          {Array.isArray(data) &&
            data.map((item) => (
              <Link
                href={`/watch?serieId=${item.serie._id}&episodeId=${item.lastEpisodeWatched._id}`}
                key={item._id}
              >
                <a>
                  <QueueSerie {...item} />
                </a>
              </Link>
            ))}
        </Grid>
      </>
    );
  };

  return (
    <section style={{ marginTop: 80, marginBottom: 40 }}>
      <Container>{renderContent()}</Container>
    </section>
  );
};
