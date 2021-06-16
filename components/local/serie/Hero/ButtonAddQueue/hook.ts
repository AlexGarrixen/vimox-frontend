import React from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { addSerieToList, deleteSerieOfList } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';
import { Context } from '../../Provider';
import { queryClient } from '@utils/queryClient';
import { ResponseGetOneSerie } from '@globalTypes/serieServices';

export const useAddQueue = () => {
  const serie = React.useContext(Context);
  const [session] = useSession();
  const mutation = useMutation(() =>
    addSerieToList(serie._id, session.user._id)
  );

  const add = React.useCallback(() => {
    if (session) {
      mutation
        .mutateAsync()
        .then(() => {
          toast.success(`Agregaste ${serie.name} a tu lista`);
          const previousData = queryClient.getQueryData<ResponseGetOneSerie>([
            'serie',
            serie._id,
          ]);

          if (previousData)
            queryClient.setQueryData(['serie', serie._id], {
              ...previousData,
              isInQueue: true,
            });
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
    add,
  };
};

export const useRemoveQueue = () => {
  const serie = React.useContext(Context);
  const [session] = useSession();
  const mutation = useMutation(() =>
    deleteSerieOfList(serie._id, session.user._id)
  );

  const remove = React.useCallback(() => {
    if (session) {
      mutation
        .mutateAsync()
        .then(() => {
          toast.info(`Removiste ${serie.name} de tu lista`);

          const previousData = queryClient.getQueryData<ResponseGetOneSerie>([
            'serie',
            serie._id,
          ]);

          if (previousData)
            queryClient.setQueryData(['serie', serie._id], {
              ...previousData,
              isInQueue: false,
            });
        })
        .catch((reason) => {
          toast.error(reason);
        });
    } else {
      toast.info('Inicia sesion para poder remover esta serie');
    }
  }, [session]);

  return {
    loading: mutation.isLoading,
    remove,
  };
};
