import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  85% {
    opacity: 1
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4rem 2rem 2rem;
  overflow: hidden;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${animation} 250ms;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    padding: 10vh;
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    padding: 12vh;
  }
`;
