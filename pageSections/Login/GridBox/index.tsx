import styled from 'styled-components';

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  padding: 58px 0;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: 1fr auto 1fr;
  }
`;
