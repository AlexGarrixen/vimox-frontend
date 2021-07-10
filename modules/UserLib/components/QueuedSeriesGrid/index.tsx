import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Grid } from '@components/Layout/Grid';
import QueuedSerie from '@modules/UserLib/components/QueuedSeriesCard';
import useQueuedSeries from '@modules/UserLib/hooks/useQueuedSeries';

const SeriesQueuedGrid = () => {
  const { data } = useQueuedSeries();

  return (
    <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap={2}>
      {Array.isArray(data) &&
        data.map((item) => (
          <Link
            href={`/watch/${slugify(item.lastEpisodeWatched.name)}?serieId=${
              item.serie._id
            }&episodeId=${item.lastEpisodeWatched._id}`}
            key={item._id}
          >
            <a>
              <QueuedSerie {...item} />
            </a>
          </Link>
        ))}
    </Grid>
  );
};

export default SeriesQueuedGrid;
