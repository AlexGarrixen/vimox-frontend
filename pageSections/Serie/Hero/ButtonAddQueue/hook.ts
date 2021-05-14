import React from 'react';
import { toast } from 'react-toastify';
import { addSerieToList, deleteSerieOfList } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';
import { Context } from '../../Context';

export const useAddQueue = (opts?: { onSuccess?: () => void }) => {
  const { serieId, serieName } = React.useContext(Context);
  const [session] = useSession();
  const [loading, setLoading] = React.useState(false);

  const handleAddSerie = React.useCallback(async () => {
    if (session) {
      try {
        setLoading(true);
        await addSerieToList(serieId, session.user._id);
        toast.success(`Agregaste ${serieName} a tu lista`);
        setLoading(false);
        opts.onSuccess && opts.onSuccess();
      } catch (reason) {
        toast.error(reason);
      }
    } else {
      toast.info('Inicia sesion para poder anadir esta serie');
      setLoading(false);
    }
  }, [session]);

  return {
    loading,
    handleAddSerie,
  };
};

export const useRemoveQueue = (opts?: { onSuccess?: () => void }) => {
  const { serieId, serieName } = React.useContext(Context);
  const [session] = useSession();
  const [loading, setLoading] = React.useState(false);

  const handleRemoveSerie = React.useCallback(async () => {
    if (session) {
      try {
        setLoading(true);
        await deleteSerieOfList(serieId, session.user._id);
        toast.info(`Removiste ${serieName} de tu lista`);
        setLoading(false);
        opts.onSuccess && opts.onSuccess();
      } catch (reason) {
        toast.info('Inicia sesion para poder anadir esta serie');
        setLoading(true);
      }
    }
  }, [session]);

  return {
    loading,
    handleRemoveSerie,
  };
};
