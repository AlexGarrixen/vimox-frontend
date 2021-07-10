import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getSerie } from '@services/series';
import { Context } from './Context';

export const ProviderSerie: FC<{ serieId: string }> = ({
  children,
  serieId,
}) => {
  const querySerie = useQuery(['serie', serieId], () => getSerie(serieId), {
    cacheTime: 900000,
  });

  return (
    <Context.Provider
      value={{
        serie: querySerie,
      }}
    >
      {children}
    </Context.Provider>
  );
};
