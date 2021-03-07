import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@components/Layout/Container';
import { Button } from '@components/Form/Button';
import styled from 'styled-components';
import type { Episode } from '@globalTypes/episodeServices';
import { useNavigation } from './hook';

const ButtonsBox = styled.div`
  margin-top: 24px;
`;

export type NavButtonsProps = {
  currentEpisode: Episode;
  episodes: Episode[];
};

export const NavButtons = ({ currentEpisode, episodes }: NavButtonsProps) => {
  const { handleNextEpisode, handlePrevEpisode, nextEpisode } = useNavigation({
    currentEpisode,
    episodes,
  });

  return (
    <ButtonsBox>
      <Container>
        <Button
          margin='0 12px 0 0'
          disabled={currentEpisode.order < 2}
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
