import styled from 'styled-components';

export const LayoutAppStyled = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    padding-bottom: 0;
  }
`;

export const ContentBox = styled.div`
  flex: 1;
`;
