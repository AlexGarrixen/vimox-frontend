import React from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Hero } from '@pageComponents/Serie/Hero';
import { EpisodesGrid } from '@pageComponents/Serie/EpisodesGrid';
import { Skeleton } from '@pageComponents/Serie/Skeleton';
import { getSerie } from '@services/series';

type SerieProps = {
  querys: Record<string, string>;
};

const Serie = ({ querys }: SerieProps) => {
  const { data, isLoading, error, refetch } = useQuery(
    ['serie', querys],
    ({ queryKey }) => getSerie(queryKey[1].id)
  );

  const renderContent = () => {
    if (error)
      return (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      );

    if (isLoading) return <Skeleton />;

    if (!data) return <div />;

    return (
      <>
        <Hero
          name={data.name}
          sinopsis={data.sinopsis}
          cover={data.imageLg}
          geners={data.geners}
        />
        <EpisodesGrid data={data.episodes} serieId={data._id} />
      </>
    );
  };

  return <LayoutApp>{renderContent()}</LayoutApp>;
};

export default Serie;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    querys: context.query,
  },
});
