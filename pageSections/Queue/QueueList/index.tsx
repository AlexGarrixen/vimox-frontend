import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { useSession } from '@contexts/Auth/hooks';
import { Skeleton } from '@localComponents/queue/Skeleton';
import { QueueSerie } from '@localComponents/queue/QueueSerie';
import { getListOfSeries } from '@services/user';

export const QueueList = (): JSX.Element => {
  const [session] = useSession();

  const { data, isLoading, error, refetch } = useQuery(
    ['user-series', session.user._id],
    () => getListOfSeries(session.user._id),
    {
      cacheTime: 900000,
    }
  );

  return (
    <section style={{ marginTop: 80, marginBottom: 40 }}>
      <Container>
        {error ? (
          <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>
        ) : isLoading ? (
          <Skeleton />
        ) : (
          <>
            <Title level='4' colorScheme='white'>
              Sigue mirando
            </Title>
            <Spacing size={32} />
            <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={2}>
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
        )}
      </Container>
    </section>
  );
};
