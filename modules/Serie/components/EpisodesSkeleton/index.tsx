import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/Layout/Container';
import { Grid } from '@components/Layout/Grid';

const SkeletonSerie = styled.div`
  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 6px;
  }
`;

const Skeleton = () => (
  <Container>
    <Grid gap={2} cols={{ xs: 2, sm: 3, md: 4 }} style={{ marginTop: 60 }}>
      <SkeletonSerie />
      <SkeletonSerie />
    </Grid>
  </Container>
);

export default Skeleton;
