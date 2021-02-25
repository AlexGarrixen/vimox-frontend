import React from 'react';
import styled, { css } from 'styled-components';

type SlideProps = {
  isActive?: boolean;
};

type ArrowButtonProps = {
  toRight?: boolean;
};

export const NavSliderBox = styled.div`
  position: relative;
  z-index: 1;

  .carousel .slick-slide > div {
    margin: 0 10px;
  }

  .carousel .slick-list {
    padding-top: 4px;
    margin: 0 -10px;
  }
`;

export const SliderBox = styled.div`
  position: relative;
`;

export const Slide = styled.div<SlideProps>`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  overflow: hidden;
  border-radius: 6px;
  position: relative;

  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
    `}
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
