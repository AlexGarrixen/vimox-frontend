import React, { FC } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { ResponseSearchSerie } from '@globalTypes/searchServices';
import { Grid } from '@components/Layout/Grid';
import { Text } from '@components/DataDisplay/Text';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import { Result } from './Result';

export const Results: FC<ResultsProps> = ({
  error,
  data,
  firstRequestMade,
}) => {
  const { hideSeriesFinder } = useSeriesFinder();

  if (error)
    return (
      <Text size='sm' colorScheme='danger'>
        Hubo un problema al recuperar las series
      </Text>
    );

  if (!data && !firstRequestMade)
    return (
      <Text size='sm' colorScheme='secondary'>
        Encuentra tu serie favorita
      </Text>
    );

  if ((!data || (Array.isArray(data) && data.length === 0)) && firstRequestMade)
    return (
      <Text size='sm' colorScheme='secondary'>
        Sin resultados
      </Text>
    );

  return (
    <Grid gap={1.5} cols={1}>
      {Array.isArray(data) &&
        data.map(({ _id, name, episodes, thumbnail }) => (
          <Link key={_id} href={`/serie/${slugify(name)}/${_id}`}>
            <a onClick={hideSeriesFinder}>
              <Result
                name={name}
                totalEpisodes={episodes}
                thumbnail={thumbnail}
              />
            </a>
          </Link>
        ))}
    </Grid>
  );
};

type ResultsProps = {
  error?: unknown;
  data?: ResponseSearchSerie;
  firstRequestMade?: boolean;
};
