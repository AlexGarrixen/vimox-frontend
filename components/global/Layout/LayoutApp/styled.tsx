import styled, { css } from 'styled-components';

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

type ContentBoxProps = {
  verticallyCenterContent?: boolean;
};

export const ContentBox = styled.div<ContentBoxProps>`
  flex: 1;

  ${({ verticallyCenterContent }) =>
    verticallyCenterContent &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
`;
