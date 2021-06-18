import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '@components/Layout/Grid';

type SkeletonRow = {
  width?: string;
};

const SkeletonBox = styled.div`
  margin: 80px 0;
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

const SkeletonItem = styled.div`
  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 6px;
  }
`;

export const Skeleton = () => (
  <SkeletonBox>
    <SkeletonRow width='40%' />
    <Grid cols={{ xs: 2, sm: 2, md: 4 }} gap={2} style={{ marginTop: 30 }}>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </Grid>
  </SkeletonBox>
);
