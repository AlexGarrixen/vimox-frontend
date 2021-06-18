import React from 'react';
import Link from 'next/link';
import { Grid } from '@components/Layout/Grid';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Episode } from '@localComponents/watch/NextEpisodes/Episode';
import { Context } from '@localComponents/watch/Provider';

export const NextEpisodes = () => {
  const { nextEpisodes, serieId } = React.useContext(Context);

  return (
    <div>
      <Title level='3' size='lg' colorScheme='white'>
        Proximos episodios
      </Title>
      <Spacing size={16} />
      {Array.isArray(nextEpisodes) && (
        <Grid gap={1.5} cols={{ xs: 2, md: 1 }}>
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
