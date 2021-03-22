import styled from 'styled-components';

export const Separator = styled.span`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: 100%;
  height: 1px;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    width: 1px;
    height: 100%;
  }
`;
