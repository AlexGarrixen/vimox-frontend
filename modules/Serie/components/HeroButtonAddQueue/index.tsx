import React from 'react';
import { Button } from '@components/Form/Button';
import useAddToQueue from '@modules/Serie/hooks/useAddToQueue';
import useRemoveOfQueue from '@modules/Serie/hooks/useRemoveOfQueue';

const ButtonAddQueue = ({ isInQueue }: { isInQueue?: boolean }) => {
  const { loading: loadingAddQueue, addToQueue } = useAddToQueue();
  const { loading: loadingRemoveQueue, removeOfQueue } = useRemoveOfQueue();

  if (!isInQueue)
    return (
      <Button
        colorScheme='secondary'
        style={{ marginTop: 14 }}
        onClick={addToQueue}
        disabled={loadingAddQueue}
      >
        Añadir a mi lista
      </Button>
    );

  return (
    <Button
      colorScheme='secondary'
      style={{ marginTop: 14 }}
      onClick={removeOfQueue}
      disabled={loadingRemoveQueue}
    >
      Quitar de mi lista
    </Button>
  );
};

export default ButtonAddQueue;
