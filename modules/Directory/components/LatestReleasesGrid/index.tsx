import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Grid } from '@components/Layout/Grid';
import { Serie } from '@components/DataDisplay/Serie';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import Skeleton from '@modules/Directory/components/LatestReleasesGridSkeleton';
import useLatestReleases from '@modules/Directory/hooks/useLatestReleases';

const LatestReleasesGrid = () => {
  const { data, isLoading, error, refetch } = useLatestReleases();

  if (error) return <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>;
  if (isLoading) return <Skeleton />;
  return (
    <Grid cols={{ xs: 2, sm: 3, md: 4, lg: 5 }} gap={1.5}>
      {Array.isArray(data.series) &&
        data.series.map(
          ({ _id, name, thumbnail, episodes, geners, isInQueue }) => (
            <Link key={_id} href={`/serie/${slugify(name)}/${_id}`}>
              <a>
                <Serie
                  name={name}
                  thumbnail={thumbnail}
                  countEpisodes={episodes}
                  geners={geners}
                  isInQueue={isInQueue}
                />
              </a>
            </Link>
          )
        )}
    </Grid>
  );
};

export default LatestReleasesGrid;
