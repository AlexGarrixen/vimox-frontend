import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '@components/Layout/Grid';

const SkeletonBox = styled.div`
  margin-bottom: 40px;
`;

const SkeletonPlayer = styled.div`
  padding-top: 56.25%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

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
  <SkeletonBox>
    <Grid cols={1} gap={2}>
      <SkeletonPlayer />
      <SkeletonRow width='60%' />
      <SkeletonRow width='40%' />
    </Grid>
  </SkeletonBox>
);

export default Skeleton;
