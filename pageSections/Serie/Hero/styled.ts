import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 80px 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: ${({ theme }) => `
    linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) -44.17%,
      ${theme.colors.gray[500]} 55.09%
    );
    `};
    z-index: 1;
  }

  & > div {
    position: relative;
    z-index: 1;
  }

  h2,
  p {
    max-width: 600px;
  }
`;
