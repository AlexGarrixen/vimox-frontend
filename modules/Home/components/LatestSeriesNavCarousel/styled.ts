import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  .carousel .slick-slide > div {
    margin: 0 10px;
  }

  .carousel .slick-list {
    padding: 4px 0;
    margin: 0 -10px;
  }
`;

export const ArrowButton = styled.button<{ toRight?: boolean }>`
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
