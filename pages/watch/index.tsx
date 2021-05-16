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
import { getEpisode } from '@services/episodes';
import { updateLastEpisodeWatched } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';

type WatchProps = {
  querys: Record<string, string>;
};

const Watch = ({ querys }: WatchProps) => {
  const [session, loading] = useSession();

  const { data, isLoading, error, isFetching, refetch } = useQuery(
    ['episode_watch', querys.episodeId],
    async ({ queryKey }) => getEpisode(queryKey[1])
  );

  React.useEffect(() => {
    if (session) {
      const inQueueUser = data?.episode.serie.addedByUsers?.find(
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
  }, [session, data]);

  return (
    <LayoutApp
      title={
        data?.episode?.name
          ? `Mirando: ${data.episode.name}`
          : 'GxAnime - mirar'
      }
    >
      {error ? (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      ) : isLoading || isFetching || loading ? (
        <Skeleton />
      ) : (
        <Provider
          episode={data.episode}
          nextEpisode={data.nextEpisode}
          prevEpisode={data.prevEpisode}
        >
          <Container>
            <LayoutBox>
              <ContentMainBox>
                <MediaContent />
              </ContentMainBox>
              <SidebarBox>
                <NextEpisodes />
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
