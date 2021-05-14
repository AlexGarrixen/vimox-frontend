import styled, { css } from 'styled-components';
import type { ErrorMessageProps } from './index';

type ErrorMessageBoxProps = Pick<ErrorMessageProps, 'margin' | 'center'>;

export const ErrorMessageBox = styled.div<ErrorMessageBoxProps>`
  & > div {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;
