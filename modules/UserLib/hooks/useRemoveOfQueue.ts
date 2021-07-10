import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useSession } from '@contexts/Auth/hooks';
import { ResponseGetSeries } from '@globalTypes/serieServices';
import { ResponseGetUserSeries } from '@globalTypes/userServices';
import { deleteSerieOfList } from '@services/user';
import { queryClient } from '@utils/queryClient';

const useRemoveSerieOfQueue = ({
  serieId,
  serieName,
}: {
  serieId: string;
  serieName: string;
}) => {
  const [session] = useSession();
  const userId = session.user._id;
  const mutation = useMutation((serieId: string) =>
    deleteSerieOfList(serieId, userId)
  );

  const handleDeleteSerie = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    mutation
      .mutateAsync(serieId)
      .then(() => {
        toast.info(`Removiste ${serieName} de tu lista`);

        const previousData = queryClient.getQueryData<ResponseGetUserSeries>([
          'user-series',
          userId,
        ]);
        const previousDirectorySeries = queryClient.getQueryData<ResponseGetSeries>(
          'series_directory'
        );

        if (previousData) {
          queryClient.setQueryData(
            ['user-series', userId],
            previousData.filter(
              (queueSerie) => queueSerie.serie._id !== serieId
            )
          );
        } else {
          queryClient.invalidateQueries(['user-series', userId]);
        }

        if (previousDirectorySeries) {
          previousDirectorySeries.series = previousDirectorySeries.series.map(
            (item) => {
              if (item._id === serieId) {
                item.isInQueue = false;
                return item;
              } else return item;
            }
          );

          queryClient.setQueryData('series_directory', previousDirectorySeries);
        }
      })
      .catch((reason) => {
        toast.error(reason);
      });
  };

  return {
    handleDeleteSerie,
    isLoading: mutation.isLoading,
  };
};

export default useRemoveSerieOfQueue;
