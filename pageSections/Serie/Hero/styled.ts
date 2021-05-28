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

export const InformationBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 14px;
  gap: 6px;

  & > div::after {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    background-color: #fff;
    margin: 0 12px;
  }
`;
