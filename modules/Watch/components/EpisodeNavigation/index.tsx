import React from 'react';
import { Button } from '@components/Form/Button';
import useEpisode from '@modules/Watch/hooks/useEpisode';
import useNavigation from '@modules/Watch/hooks/useNavigation';

const Navigation = () => {
  const {
    data: { prevEpisode, nextEpisode },
  } = useEpisode();
  const { goNextEpisode, goPrevEpisode } = useNavigation();

  return (
    <div>
      <Button
        colorScheme='secondary'
        style={{ marginRight: 12 }}
        disabled={!prevEpisode}
        onClick={goPrevEpisode}
      >
        Anterior
      </Button>
      <Button disabled={!nextEpisode} onClick={goNextEpisode}>
        Siguiente
      </Button>
    </div>
  );
};

export default Navigation;
