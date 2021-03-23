import styled, { css } from 'styled-components';
import { Typography } from '@components/DataDisplay/Typography';

type HelperTextProps = {
  error?: boolean;
};

const HelperTextStyled = styled(Typography)<HelperTextProps>`
  font-size: ${({ theme }) => theme.fontSize.xs[0]};
  line-height: ${({ theme }) => theme.fontSize.xs[1]};
  margin-top: 8px;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `}
`;

export const HelperText = HelperTextStyled;
