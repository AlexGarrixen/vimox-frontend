import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Grid } from '@components/Layout/Grid';

type SkeletonRow = {
  width?: string;
};

const SkeletonBox = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
`;

const SkeletonPlayer = styled.div`
  padding-top: 42.85%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
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
    <Container>
      <Grid cols={1} gap={2}>
        <SkeletonPlayer />
        <SkeletonRow width='60%' />
        <SkeletonRow width='40%' />
      </Grid>
    </Container>
  </SkeletonBox>
);
