import React from 'react';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Provider } from '@pageSections/Serie/Context';
import { Hero } from '@pageSections/Serie/Hero';
import { EpisodesGrid } from '@pageSections/Serie/EpisodesGrid';
import { Skeleton } from '@pageSections/Serie/Skeleton';
import { getSerie } from '@services/series';

type SerieProps = {
  querys: Record<string, string>;
};

const Serie = ({ querys }: SerieProps) => {
  const { data, isLoading, error, refetch } = useQuery(
    ['serie', querys.id],
    ({ queryKey }) => getSerie(queryKey[1])
  );

  return (
    <LayoutApp title={data?.name || 'GxAnime - Serie'}>
      {error ? (
        <ErrorMessage margin='80px 0 0 0' onClickRetry={refetch}>
          {error}
        </ErrorMessage>
      ) : isLoading ? (
        <Skeleton />
      ) : (
        <Provider
          serieId={data._id}
          serieName={data.name}
          addedByUsers={data?.addedByUsers}
        >
          <Hero
            name={data.name}
            sinopsis={data.sinopsis}
            cover={data.imageLg}
            geners={data.geners}
          />
          <EpisodesGrid data={data.episodes} />
        </Provider>
      )}
    </LayoutApp>
  );
};

export default Serie;

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {
    querys: context.query,
  },
});
