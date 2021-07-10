import React from 'react';
import { GetServerSideProps } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import WatchModule from '@modules/Watch';

const Watch = ({ episodeId, serieId, serieName }: WatchProps) => {
  return (
    <LayoutApp title={`Mirando ${serieName?.replace(/-/g, ' ')} - Vimox`}>
      <WatchModule episodeId={episodeId} serieId={serieId} />
    </LayoutApp>
  );
};

type WatchProps = {
  episodeId: string;
  serieId: string;
  serieName: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;

  return {
    props: {
      episodeId: query.episodeId,
      serieId: query.serieId,
      serieName: query.slug[0],
    },
  };
};

export default Watch;
