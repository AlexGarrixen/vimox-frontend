import React from 'react';
import styled from 'styled-components';
import { Grid } from '@components/Layout/Grid';

const SkeletonSlide = styled.div`
  ::before {
    content: '';
    display: block;
    padding-top: 150%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 6px;
  }
`;

const Skeleton = () => (
  <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5 }} gap={2}>
    <SkeletonSlide />
    <SkeletonSlide />
    <SkeletonSlide />
  </Grid>
);

export default Skeleton;
