import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Grid } from '@components/Layout/Grid';
import Episode from '@modules/Watch/components/NextEpisodesCardEpisode';
import useNextEpisodes from '@modules/Watch/hooks/useNextEpisodes';

const NextEpisodesGrid = () => {
  const { data } = useNextEpisodes();

  return Array.isArray(data) ? (
    <Grid gap={1.5} cols={{ xs: 2, md: 1 }}>
      {data.map(({ thumbnail, name, order, _id, serie }) => (
        <Link
          key={_id}
          href={`/watch/${slugify(name)}?serieId=${serie}&episodeId=${_id}`}
        >
          <a>
            <Episode thumbnail={thumbnail} name={name} order={order} />
          </a>
        </Link>
      ))}
    </Grid>
  ) : null;
};

export default NextEpisodesGrid;
