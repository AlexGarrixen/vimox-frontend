import React from 'react';
import Link from 'next/link';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Typography } from '@components/DataDisplay/Typography';
import { Episode } from '@localComponents/watch/NextEpisodes/Episode';
import { Context } from '@localComponents/watch/Provider';

export const NextEpisodes = () => {
  const { nextEpisodes, serieId } = React.useContext(Context);

  return (
    <div>
      <Typography as='h3' size='lg' white>
        Proximos episodios
      </Typography>
      <Spacing size={16} />
      {Array.isArray(nextEpisodes) && (
        <Grid gap={1.5} xs='2' md='1'>
          {nextEpisodes.map(({ thumbnail, name, order, _id }) => (
            <Link key={_id} href={`/watch?serieId=${serieId}&episodeId=${_id}`}>
              <a>
                <Episode thumbnail={thumbnail} name={name} order={order} />
              </a>
            </Link>
          ))}
        </Grid>
      )}
    </div>
  );
};
