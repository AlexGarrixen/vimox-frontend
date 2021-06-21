import React from 'react';
import { NextPageContext } from 'next';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from '@localComponents/watch/Provider';
import { Skeleton } from '@localComponents/watch/Skeleton';
import {
  LayoutBox,
  ContentMainBox,
  SidebarBox,
} from '@localComponents/watch/LayoutBox';
import { MediaContent } from '@pageSections/Watch/MediaContent';
import { NextEpisodes } from '@pageSections/Watch/NextEpisodes';
import { getEpisode, getNextEpisodes } from '@services/episodes';
import { updateLastEpisodeWatched, getUserSerie } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';
import { queryClient } from '@utils/queryClient';
import { ResponseGetUserSeries } from '@globalTypes/userServices';

type WatchProps = {
  episodeId: string;
  serieId: string;
};

const Watch = ({ episodeId, serieId }: WatchProps) => {
  const [session] = useSession();

  const episodeQuery = useQuery(
    ['episode_watch', episodeId],
    ({ queryKey }) => getEpisode(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  const nextEpisodesQuery = useQuery(
    ['next_episodes', episodeId],
    ({ queryKey }) => getNextEpisodes(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  const shouldUpdateLastEpisodeWatched = async () => {
    try {
      const serieInQueue = await getUserSerie(serieId, session.user._id);

      if (serieInQueue) {
        const updatedQueueSerie = await updateLastEpisodeWatched({
          userId: session.user._id,
          serieId,
          episodeId,
        });
        const previousUserSeries = queryClient.getQueryData<ResponseGetUserSeries>(
          ['user-series', session.user._id]
        );

        if (previousUserSeries)
          queryClient.setQueryData(
            ['user-series', session.user._id],
            previousUserSeries.map((queueSerie) => {
              if (queueSerie.serie._id === serieId) {
                queueSerie.lastEpisodeWatched =
                  updatedQueueSerie.lastEpisodeWatched;
                return queueSerie;
              } else return queueSerie;
            })
          );
      }
    } catch (reason) {
      toast.error(reason);
    }
  };

  React.useEffect(() => {
    if (session) shouldUpdateLastEpisodeWatched();
  }, [session, episodeId]);

  return (
    <LayoutApp
      title={
        episodeQuery.data?.episode?.name
          ? `Mirando: ${episodeQuery.data.episode.name}`
          : 'Vimox - mirar'
      }
    >
      {episodeQuery.isFetching || nextEpisodesQuery.isFetching ? (
        <Skeleton />
      ) : (
        <Provider
          serieId={serieId}
          episode={episodeQuery.data?.episode}
          nextEpisode={episodeQuery.data?.nextEpisode}
          prevEpisode={episodeQuery.data?.prevEpisode}
          nextEpisodes={nextEpisodesQuery.data}
        >
          <Spacing size={40} />
          <Container>
            <LayoutBox>
              <ContentMainBox>
                {episodeQuery.isError ? (
                  <ErrorMessage
                    margin='80px 0 0 0'
                    onClickRetry={episodeQuery.refetch}
                  >
                    {episodeQuery.error}
                  </ErrorMessage>
                ) : (
                  <MediaContent />
                )}
              </ContentMainBox>
              <SidebarBox>
                {nextEpisodesQuery.isError ? (
                  <ErrorMessage
                    margin='80px 0 0 0'
                    onClickRetry={nextEpisodesQuery.refetch}
                  >
                    {nextEpisodesQuery.error}
                  </ErrorMessage>
                ) : (
                  <NextEpisodes />
                )}
              </SidebarBox>
            </LayoutBox>
          </Container>
          <Spacing size={30} />
        </Provider>
      )}
    </LayoutApp>
  );
};

Watch.getInitialProps = (ctx: NextPageContext) => ({
  episodeId: ctx.query.episodeId,
  serieId: ctx.query.serieId,
});

export default Watch;
