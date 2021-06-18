import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Grid } from '@components/Layout/Grid';

type SkeletonRow = {
  width?: string;
};

const SkeletonBox = styled.div`
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const SkeletonSerie = styled.div`
  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 6px;
  }
`;

export const Skeleton = () => (
  <>
    <SkeletonBox>
      <Container>
        <Grid gap={2}>
          <SkeletonRow width='50%' />
          <SkeletonRow width='30%' />
          <SkeletonRow width='30%' />
          <SkeletonRow width='30%' />
        </Grid>
        <Grid gap={2} cols={{ xs: 2, sm: 3, md: 4 }} style={{ marginTop: 60 }}>
          <SkeletonSerie />
          <SkeletonSerie />
        </Grid>
      </Container>
    </SkeletonBox>
  </>
);
