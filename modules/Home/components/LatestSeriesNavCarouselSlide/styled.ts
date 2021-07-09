import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isActive?: boolean }>`
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
