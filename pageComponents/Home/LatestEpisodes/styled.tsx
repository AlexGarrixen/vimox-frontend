import styled from 'styled-components';

export const LatestEpisodesBox = styled.section`
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    height: 520px;
    overflow: hidden;

    & > div {
      display: flex;
      height: 100%;
    }
  }
`;
