import React from 'react';
import { Context } from '../../Provider';
import { Button } from '@components/Form/Button';
import { useNavigation } from './hook';

export const NavButtons = () => {
  const { nextEpisode, prevEpisode } = React.useContext(Context);
  const { handleNextEpisode, handlePrevEpisode } = useNavigation();

  return (
    <div>
      <Button
        colorScheme='secondary'
        style={{ marginRight: 12 }}
        disabled={!prevEpisode}
        onClick={handlePrevEpisode}
      >
        Anterior
      </Button>
      <Button disabled={!nextEpisode} onClick={handleNextEpisode}>
        Siguiente
      </Button>
    </div>
  );
};
