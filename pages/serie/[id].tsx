import React from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Hero } from '@pageComponents/Serie/Hero';
import { EpisodesGrid } from '@pageComponents/Serie/EpisodesGrid';
import { Skeleton } from '@pageComponents/Serie/Skeleton';
import { getSerie } from '@services/series';
import { useSession } from '@contexts/Auth/hooks';

type SerieProps = {
  querys: Record<string, string>;
};

const Serie = ({ querys }: SerieProps) => {
  const [session, loading] = useSession();

  const { data, isLoading, error, refetch } = useQuery(
    ['serie', querys],
    ({ queryKey }) => getSerie(queryKey[1].id)
  );

  const isAdded = !session
    ? false
    : Boolean(data?.addedByUsers?.[session.user._id]);

  const renderContent = () => {
    if (error)
      return (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      );

    if (isLoading || loading) return <Skeleton />;

    if (!data) return <div />;

    return (
      <>
        <Hero
          serieId={data._id}
          name={data.name}
          sinopsis={data.sinopsis}
          cover={data.imageLg}
          geners={data.geners}
          isAdded={isAdded}
        />
        <EpisodesGrid data={data.episodes} serieId={data._id} />
      </>
    );
  };

  return (
    <LayoutApp title={data?.name || 'GxAnime - Serie'}>
      {renderContent()}
    </LayoutApp>
  );
};

export default Serie;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    querys: context.query,
  },
});
