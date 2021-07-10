import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { queryClient } from '@utils/queryClient';
import { updateLastEpisodeWatched, getUserSerie } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';
import { ResponseGetUserSeries } from '@globalTypes/userServices';

const useUpdateLastEpisodeWatched = ({
  serieId,
  episodeId,
}: {
  serieId: string;
  episodeId: string;
}) => {
  const [session] = useSession();

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

  useEffect(() => {
    if (session) shouldUpdateLastEpisodeWatched();
  }, [session, episodeId]);
};

export default useUpdateLastEpisodeWatched;
