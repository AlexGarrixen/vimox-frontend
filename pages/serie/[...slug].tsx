import React from 'react';
import { GetServerSideProps } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import SerieModule from '@modules/Serie';

const Serie = ({ id, name }: SerieProps) => (
  <LayoutApp title={`${name?.replace(/-/g, ' ')} - Vimox`}>
    <SerieModule serieId={id} />
  </LayoutApp>
);

type SerieProps = {
  id: string;
  name: string;
};

export default Serie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  return {
    props: {
      name: slug[0],
      id: slug[1],
    },
  };
};
