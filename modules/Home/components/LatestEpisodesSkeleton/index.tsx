import React from 'react';
import styled, { css } from 'styled-components';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';

type SkeletonRow = {
  width?: string;
};

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
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;

const Skeleton = () => (
  <div>
    <Container>
      <SkeletonRow width='30%' />
      <Grid cols={{ xs: 1, sm: 2, md: 4 }} gap={2} style={{ marginTop: 30 }}>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </Grid>
    </Container>
  </div>
);

export default Skeleton;
