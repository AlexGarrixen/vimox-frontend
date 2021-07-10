import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Grid } from '@components/Layout/Grid';

const SkeletonBox = styled.div`
  padding: 80px 0;
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
    <Container>
      <Grid gap={2}>
        <SkeletonRow width='50%' />
        <SkeletonRow width='30%' />
        <SkeletonRow width='30%' />
        <SkeletonRow width='30%' />
      </Grid>
    </Container>
  </SkeletonBox>
);

export default Skeleton;
