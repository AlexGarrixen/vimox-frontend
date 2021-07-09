import React from 'react';
import styled, { css } from 'styled-components';

const SkeletonRow = styled.div<{ width?: string }>`
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

const Skeleton = () => (
  <div>
    <SkeletonRow width='160px' />
  </div>
);

export default Skeleton;
