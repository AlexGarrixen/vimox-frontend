import styled, { css } from 'styled-components';
import { LinkItemProps } from '.';

export const AnchorStyled = styled.a<Pick<LinkItemProps, 'isActive'>>`
  color: #fff;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
