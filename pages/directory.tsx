import * as React from 'react';
import { GetServerSideProps } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';
import { DirectoryProvider } from '@pageComponents/Directory/Provider';
import { SeriesGrid } from '@pageComponents/Directory/SeriesGrid';
import { Filter } from '@pageComponents/Directory/Filter';

type HomeProps = {
  querys: Record<string, string>;
};

const Home = ({ querys }: HomeProps) => (
  <DirectoryProvider initialQuerys={querys}>
    <LayoutApp>
      <Container>
        <Typography as='h4' white margin='80px 0 32px 0'>
          Series recientes
        </Typography>
        <Filter />
        <SeriesGrid />
      </Container>
    </LayoutApp>
  </DirectoryProvider>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    querys: context.query,
  },
});
