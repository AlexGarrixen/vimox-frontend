import styled, { css } from 'styled-components';

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 6px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: 100%;
  position: relative;
  border-radius: 999px;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    width: ${({ value }) => `${value}%`};
    transition: width 250ms;
  }

  ${({ success }) =>
    success &&
    css`
      ::after {
        background-color: ${({ theme }) => theme.colors.success};
      }
    `}

  ${({ warning }) =>
    warning &&
    css`
      ::after {
        background-color: ${({ theme }) => theme.colors.warning};
      }
    `}

  ${({ danger }) =>
    danger &&
    css`
      ::after {
        background-color: ${({ theme }) => theme.colors.danger};
      }
    `}
`;

type ProgressBarProps = {
  value?: number;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  className?: string;
};
