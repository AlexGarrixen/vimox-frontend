import styled from 'styled-components';

export const EpisodesListBox = styled.div`
  @media (min-width: ${({ theme }) => theme.screens.md}) {
    width: 400px;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    & > div {
      flex: 1;
      overflow: hidden;
    }

    & > div > div {
      max-height: 100%;
    }
  }
`;
