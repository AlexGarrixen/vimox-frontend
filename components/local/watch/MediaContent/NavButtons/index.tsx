import React from 'react';
import { Context } from '../../Provider';
import { Container } from '@components/Layout/Container';
import { Button } from '@components/Form/Button';
import styled from 'styled-components';
import { useNavigation } from './hook';

const ButtonsBox = styled.div`
  margin-top: 24px;
`;

export const NavButtons = () => {
  const { episode } = React.useContext(Context);
  const { handleNextEpisode, handlePrevEpisode, nextEpisode } = useNavigation();

  return (
    <ButtonsBox>
      <Container>
        <Button
          margin='0 12px 0 0'
          disabled={episode.order < 2}
          onClick={handlePrevEpisode}
        >
          Anterior
        </Button>
        <Button primary disabled={!nextEpisode} onClick={handleNextEpisode}>
          Siguiente
        </Button>
      </Container>
    </ButtonsBox>
  );
};
