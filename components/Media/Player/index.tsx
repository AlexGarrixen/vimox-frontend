import React from 'react';
import styled from 'styled-components';

const PlayerBox = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    padding-top: 42.85%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Player = () => (
  <PlayerBox>
    <Iframe
      frameBorder='0'
      src='https://mega.nz/embed/bcMzWApR#b5AgUHbu6OFcGE-DMNyGs1iypDa8Fpl7TzcWUlSCUjw'
      allowFullScreen
    />
  </PlayerBox>
);
