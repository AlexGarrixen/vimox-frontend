import styled, { css } from 'styled-components';

type ArrowButtonProps = {
  toRight?: boolean;
};

export const Root = styled.div`
  position: relative;
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
  height: 40px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.gray[400]};

  ${({ toRight }) =>
    toRight
      ? css`
          right: -20px;
        `
      : css`
          left: -20px;
        `}
`;
