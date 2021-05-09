import React from 'react';
import { useSpring } from 'react-spring';
import { toast } from 'react-toastify';
import { addSerieToList, deleteSerieOfList } from '@services/user';
import { useSession } from '@contexts/Auth/hooks';

const initialStyles = {
  opacity: 0,
};

const activeStyles = {
  opacity: 1,
};

export const useAnimations = () => {
  const [headingStyles, setHeadingStyles] = useSpring(() => initialStyles);

  const [genersStyles, setGenersStyles] = useSpring(() => initialStyles);

  const [sinopsis, setSinopsis] = useSpring(() => initialStyles);

  const headingCssProps = {
    opacity: headingStyles.opacity,
  };

  const genersCssProps = {
    opacity: genersStyles.opacity,
  };

  const sinopsisCssProps = {
    opacity: sinopsis.opacity,
  };

  React.useEffect(() => {
    setTimeout(() => setHeadingStyles(activeStyles), 450);
    setTimeout(() => setGenersStyles(activeStyles), 640);
    setTimeout(() => setSinopsis(activeStyles), 800);
  }, []);

  return {
    headingCssProps,
    genersCssProps,
    sinopsisCssProps,
  };
};

export const useAddAndRemoveSerieOfList = (options: {
  isAdded: boolean;
  serieId: string;
  nameSerie: string;
}) => {
  const [session] = useSession();
  const [added, setAdded] = React.useState(options.isAdded);
  const [loadingAddSerie, setLoadingAddSerie] = React.useState(false);
  const [loadingDeleteSerie, setLoadingDeleteSerie] = React.useState(false);

  const handleAddSerie = React.useCallback(async () => {
    if (session) {
      try {
        setLoadingAddSerie(true);
        await addSerieToList(options.serieId, session.user._id);
        toast.success(`Agregaste ${options.nameSerie} a tu lista`);
        setLoadingAddSerie(false);
        setAdded(true);
      } catch (reason) {
        toast.error(reason);
      }
    } else {
      toast.info('Inicia sesion para poder anadir esta serie');
      setLoadingAddSerie(false);
    }
  }, [session]);

  const handleRemoveSerie = React.useCallback(async () => {
    if (session) {
      try {
        setLoadingDeleteSerie(true);
        await deleteSerieOfList(options.serieId, session.user._id);
        toast.info(`Removiste ${options.nameSerie} de tu lista`);
        setLoadingDeleteSerie(false);
        setAdded(false);
      } catch (reason) {
        toast.info('Inicia sesion para poder anadir esta serie');
        setLoadingDeleteSerie(true);
      }
    }
  }, [session]);

  React.useEffect(() => {
    setAdded(options.isAdded);
  }, [options.isAdded]);

  return {
    handleAddSerie,
    handleRemoveSerie,
    loadingAddSerie,
    loadingDeleteSerie,
    added,
  };
};
