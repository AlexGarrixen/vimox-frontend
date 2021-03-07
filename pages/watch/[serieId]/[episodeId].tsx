import React from 'react';
import { GetServerSideProps } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { PlayerComponent } from '@pageComponents/Watch/Player';
import { NavButtons } from '@pageComponents/Watch/NavButtons';
import { About } from '@pageComponents/Watch/About';

type WatchProps = {
  querys: Record<string, string>;
};

const Watch = ({ querys }: WatchProps) => (
  <LayoutApp>
    <PlayerComponent />
    <NavButtons />
    <About />
  </LayoutApp>
);

export default Watch;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    querys: context.query,
  },
});
