import React from 'react';
import { NextPageContext } from 'next';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { PlayerComponent } from '@pageComponents/Watch/Player';
import { NavButtons } from '@pageComponents/Watch/NavButtons';
import { About } from '@pageComponents/Watch/About';
import { Skeleton } from '@pageComponents/Watch/Skeleton';
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
        console.error(reason);
        throw 'Algo salio mal intentalo mas tarde';
      }
    }
  );

  React.useEffect(() => {
    if (session) {
      const userWatchingSerie = data?.episode.serie.addedByUsers?.find(
        ({ user }) => user === session.user._id
      );

      if (userWatchingSerie) {
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

  const renderContent = () => {
    if (error)
      return (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      );

    if (isLoading || isFetching || loading) return <Skeleton />;

    if (!data || !data.episode) return <div />;

    return (
      <>
        <PlayerComponent src={data.episode.src} />
        <NavButtons
          currentEpisode={data.episode}
          episodes={data.episodes.data}
        />
        <About
          name={data.episode.name}
          order={data.episode.order}
          sinopsis={data.episode.sinopsis}
        />
      </>
    );
  };

  return (
    <LayoutApp
      title={
        data?.episode?.name
          ? `Mirando: ${data.episode.name}`
          : 'GxAnime - mirar'
      }
    >
      {renderContent()}
    </LayoutApp>
  );
};

Watch.getInitialProps = (ctx: NextPageContext) => ({
  querys: ctx.query,
});

export default Watch;
