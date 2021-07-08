import styled, { css } from 'styled-components';
import { Text } from '@components/DataDisplay/Text';
import { HelperTextProps } from '.';

export const HelperTextStyled = styled(Text)<HelperTextProps>`
  font-size: ${({ theme }) => theme.fontSize.xs[0]};
  line-height: ${({ theme }) => theme.fontSize.xs[1]};
  margin-top: 8px;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`;
