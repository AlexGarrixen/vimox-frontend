import styled from 'styled-components';

export const Root = styled.section`
  overflow: hidden;
  position: relative;

  h4 {
    position: relative;
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    ::before {
      content: '';
      position: absolute;
      width: 20%;
      top: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        -90deg,
        rgba(255, 255, 255, 0) 0%,
        rgb(18, 20, 29, 0.95) 75%
      );
      z-index: 1;
      pointer-events: none;
    }

    ::after {
      content: '';
      position: absolute;
      width: 20%;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgb(18, 20, 29, 0.95) 75%
      );
      z-index: 1;
      pointer-events: none;
    }
  }
`;
