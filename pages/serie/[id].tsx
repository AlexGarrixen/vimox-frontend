import React from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Spacing } from '@components/Layout/Spacing';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from '@localComponents/serie/Provider';
import { Skeleton } from '@localComponents/serie/Skeleton';
import { Hero } from '@pageSections/Serie/Hero';
import { EpisodesGrid } from '@pageSections/Serie/EpisodesGrid';
import { getSerie } from '@services/series';

type SerieProps = {
  serieId: string;
};

const Serie = ({ serieId }: SerieProps) => {
  const { data, isLoading, error, refetch } = useQuery(
    ['serie', serieId],
    () => getSerie(serieId),
    {
      cacheTime: 900000,
    }
  );

  return (
    <LayoutApp title={data?.name || 'GxAnime - Serie'}>
      {error ? (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      ) : isLoading ? (
        <Skeleton />
      ) : !data ? null : (
        <Provider data={data}>
          <Hero />
          <Spacing size={80} />
          <EpisodesGrid data={data.episodes} />
          <Spacing size={30} />
        </Provider>
      )}
    </LayoutApp>
  );
};

export default Serie;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    serieId: context.query.id,
  },
});
