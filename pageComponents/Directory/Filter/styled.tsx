import styled from 'styled-components';

export const FilterBox = styled.div`
  margin-bottom: 30px;
`;

export const FlexibleItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -8px;

  & > * {
    margin: 8px;
  }

  & > * {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    & > * {
      width: auto;
    }
  }
`;
