import styled from 'styled-components';

export const Root = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 80px 0;
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
  }
`;
