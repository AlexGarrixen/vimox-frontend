import React from 'react';
import styled, { css } from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Grid } from '@components/Layout/Grid';
import { Play } from '@components/Icon/Play';

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

const SkeletonSlide = styled.div`
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
    <Container>
      <Grid gap={2}>
        <SkeletonRow width='70%' />
        <SkeletonRow width='40%' />
      </Grid>
      <Play xxxl margin='30px 0 50px 0' color='#2A2C34' />
      <Grid cols={{ xs: 2, sm: 3, md: 4 }} gap={2}>
        <SkeletonSlide />
        <SkeletonSlide />
      </Grid>
    </Container>
  </SkeletonBox>
);
