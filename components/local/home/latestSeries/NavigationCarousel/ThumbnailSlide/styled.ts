import styled, { css } from 'styled-components';

type SlideProps = {
  isActive?: boolean;
};

export const Root = styled.div<SlideProps>`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  overflow: hidden;
  border-radius: 6px;
  position: relative;

  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
    `}
`;
