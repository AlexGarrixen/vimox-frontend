import React from 'react';
import { Player } from '@components/Media/Player';
import { Container } from '@components/Layout/Container';
import styled from 'styled-components';

const PlayerBox = styled.div`
  margin-top: 80px;
`;

export const PlayerComponent = () => (
  <PlayerBox>
    <Container>
      <Player />
    </Container>
  </PlayerBox>
);
