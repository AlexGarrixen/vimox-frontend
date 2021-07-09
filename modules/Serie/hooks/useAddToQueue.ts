import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { addSerieToList } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';
import { queryClient } from '@utils/queryClient';
import { ResponseGetUserSeries } from '@globalTypes/userServices';
import {
  ResponseGetOneSerie,
  ResponseGetSeries,
} from '@globalTypes/serieServices';
import useSerie from '@modules/Serie/hooks/useSerie';

const useAddToQueue = () => {
  const { data: serie } = useSerie();
  const [session] = useSession();
  const mutation = useMutation(() =>
    addSerieToList(serie._id, session.user._id)
  );

  const addToQueue = React.useCallback(() => {
    if (session) {
      mutation
        .mutateAsync()
        .then((response) => {
          toast.success(`Agregaste ${serie.name} a tu lista`);
          const previousData = queryClient.getQueryData<ResponseGetOneSerie>([
            'serie',
            serie._id,
          ]);
          const previousDirectorySeries = queryClient.getQueryData<ResponseGetSeries>(
            'series_directory'
          );
          const previousUserSeries = queryClient.getQueryData<ResponseGetUserSeries>(
            ['user-series', session.user._id]
          );

          if (previousData)
            queryClient.setQueryData(['serie', serie._id], {
              ...previousData,
              isInQueue: true,
            });

          if (previousDirectorySeries) {
            previousDirectorySeries.series = previousDirectorySeries.series.map(
              (item) => {
                if (item._id === serie._id) {
                  item.isInQueue = true;
                  return item;
                } else return item;
              }
            );

            queryClient.setQueryData(
              'series_directory',
              previousDirectorySeries
            );
          }

          if (previousUserSeries)
            queryClient.setQueryData(
              ['user-series', session.user._id],
              [...previousUserSeries, response]
            );
        })
        .catch((reason) => {
          toast.error(reason);
        });
    } else {
      toast.info('Inicia sesion para poder anadir esta serie');
    }
  }, [session]);

  return {
    loading: mutation.isLoading,
    addToQueue,
  };
};

export default useAddToQueue;
