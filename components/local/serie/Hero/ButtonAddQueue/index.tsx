import React from 'react';
import { Button } from '@components/Form/Button';
import { useAddQueue, useRemoveQueue } from './hook';

export const ButtonAddQueue = ({ isInQueue }: { isInQueue?: boolean }) => {
  const { loading: loadingAddQueue, add } = useAddQueue();
  const { loading: loadingRemoveQueue, remove } = useRemoveQueue();

  if (!isInQueue)
    return (
      <Button margin='14px 0 0 0' onClick={add} disabled={loadingAddQueue}>
        Añadir a mi lista
      </Button>
    );

  return (
    <Button margin='14px 0 0 0' onClick={remove} disabled={loadingRemoveQueue}>
      Quitar de mi lista
    </Button>
  );
};
