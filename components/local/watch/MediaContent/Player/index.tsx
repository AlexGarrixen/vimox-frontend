import React from 'react';
import { Player } from '@components/Media/Player';
import { Container } from '@components/Layout/Container';
import { Context } from '../../Provider';
import styled from 'styled-components';

const PlayerBox = styled.div`
  margin-top: 80px;
`;

export const PlayerComponent = () => {
  const { episode } = React.useContext(Context);

  return (
    <PlayerBox>
      <Container>
        <Player src={episode.src} />
      </Container>
    </PlayerBox>
  );
};
