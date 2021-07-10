import styled from 'styled-components';
import { Container } from '@components/Layout/Container';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24vw 0;
  position: relative;
  overflow: hidden;
  margin-top: calc(var(--heightSidebar) * -1);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `
    linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) -44.17%,
      ${theme.colors.gray[500]} 55.09%
    );
    `};
    z-index: 1;
  }

  h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    min-height: 400px;
    padding: 10vw 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    min-height: 480px;
    padding: 8vw 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    min-height: 600px;
  }
`;

export const ContainerStyled = styled(Container)`
  z-index: 2;
`;
