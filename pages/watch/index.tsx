import React from 'react';
import { NextPageContext } from 'next';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
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
import { updateLastEpisodeWatched } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';

type WatchProps = {
  querys: Record<string, string>;
};

const Watch = ({ querys }: WatchProps) => {
  const [session] = useSession();

  const episodeQuery = useQuery(
    ['episode_watch', querys.episodeId],
    ({ queryKey }) => getEpisode(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  const nextEpisodesQuery = useQuery(
    ['next_episodes', querys.episodeId],
    ({ queryKey }) => getNextEpisodes(queryKey[1]),
    { refetchIntervalInBackground: false }
  );

  React.useEffect(() => {
    if (session) {
      const inQueueUser = episodeQuery.data?.episode.serie.addedByUsers?.find(
        ({ user }) => user === session.user._id
      );

      if (inQueueUser) {
        updateLastEpisodeWatched({
          userId: session.user._id,
          serieId: querys.serieId,
          episodeId: querys.episodeId,
        }).catch((reason) => {
          toast.error(reason);
        });
      }
    }
  }, [session, episodeQuery.data]);

  return (
    <LayoutApp
      title={
        episodeQuery.data?.episode?.name
          ? `Mirando: ${episodeQuery.data.episode.name}`
          : 'GxAnime - mirar'
      }
    >
      {episodeQuery.isFetching || nextEpisodesQuery.isFetching ? (
        <Skeleton />
      ) : (
        <Provider
          serieId={querys.serieId}
          episode={episodeQuery.data?.episode}
          nextEpisode={episodeQuery.data?.nextEpisode}
          prevEpisode={episodeQuery.data?.prevEpisode}
          nextEpisodes={nextEpisodesQuery.data}
        >
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
        </Provider>
      )}
    </LayoutApp>
  );
};

Watch.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default Watch;
