import styled from 'styled-components';

export const LayoutAppStyled = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  flex: 1;
`;
