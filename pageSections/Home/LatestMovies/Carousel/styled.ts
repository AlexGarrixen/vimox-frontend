import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;

  .carousel .slick-slide > div {
    margin: 0 10px;
  }

  .carousel .slick-list {
    margin: 0 -10px;
  }

  .slick-list {
    overflow: initial;
  }
`;

export const ArrowButton = styled.button<{
  toRight?: boolean;
}>`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    border: none;
    background-color: ${({ theme }) => theme.colors.gray[400]};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    border-radius: 50%;
    cursor: pointer;
  }

  ${({ toRight }) =>
    toRight
      ? css`
          right: -20px;
        `
      : css`
          left: -20px;
        `}
`;
