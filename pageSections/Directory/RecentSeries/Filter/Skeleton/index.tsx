import React from 'react';
import styled, { css } from 'styled-components';

type SkeletonRow = {
  width?: string;
};

const SkeletonBox = styled.div`
  margin: 40px 0 80px 0;
`;

const SkeletonRow = styled.div<SkeletonRow>`
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: 100%;
  border-radius: 6px;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;

export const Skeleton = () => (
  <SkeletonBox>
    <SkeletonRow width='40%' />
  </SkeletonBox>
);
