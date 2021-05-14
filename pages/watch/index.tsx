import React from 'react';
import { NextPageContext } from 'next';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from '@localComponents/watch/Provider';
import { Skeleton } from '@localComponents/watch/Skeleton';
import { MediaContent } from '@pageSections/Watch/MediaContent';
import { getEpisode, getEpisodes } from '@services/episodes';
import { updateLastEpisodeWatched } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';

type WatchProps = {
  querys: Record<string, string>;
};

const Watch = ({ querys }: WatchProps) => {
  const [session, loading] = useSession();

  const { data, isLoading, error, isFetching, refetch } = useQuery(
    ['episode_watch', querys],
    async ({ queryKey }) => {
      try {
        const data = await Promise.all([
          getEpisode(queryKey[1].episodeId),
          getEpisodes({ of_serieId: queryKey[1].serieId }),
        ]);

        return {
          episode: data[0],
          episodes: data[1],
        };
      } catch (reason) {
        throw 'Algo salio mal intentalo mas tarde';
      }
    }
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
        <Provider episode={data.episode} episodesSerie={data.episodes.data}>
          <MediaContent />
        </Provider>
      )}
    </LayoutApp>
  );
};

Watch.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default Watch;
