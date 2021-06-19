import styled, { css } from 'styled-components';

type SlideProps = {
  isActive?: boolean;
};

export const Root = styled.div<SlideProps>`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
    `}
`;
