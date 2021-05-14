import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

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

export const CoverImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const GenersBox = styled.div`
  display: flex;
  margin-bottom: 14px;

  p:not(:last-child) {
    margin-right: 12px;
  }

  p:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }
`;
