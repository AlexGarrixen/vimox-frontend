import React from 'react';
import { Player } from '@components/Media/Player';
import { Container } from '@components/Layout/Container';
import styled from 'styled-components';

const PlayerBox = styled.div`
  margin-top: 80px;
`;

type PlayerProps = {
  src: string;
};

export const PlayerComponent = ({ src }: PlayerProps) => (
  <PlayerBox>
    <Container>
      <Player src={src} />
    </Container>
  </PlayerBox>
);
