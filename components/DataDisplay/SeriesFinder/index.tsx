import React from 'react';
import Link from 'next/link';
import { Search } from '@components/Icon/Search';
import { Grid } from '@components/Layout/Grid';
import { Typography } from '@components/DataDisplay/Typography';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import { Result } from './Result';
import { useFinder } from './hook';
import { SeriesFinderBox, HeaderBox, TextBox, ResultsBox } from './styled';

export const SeriesFinder = () => {
  const { value, handleChange, results, firstRequestMade, error } = useFinder();
  const { hideSeriesFinder } = useSeriesFinder();

  return (
    <SeriesFinderBox>
      <HeaderBox>
        <Search xl />
        <TextBox
          placeholder='Buscar serie'
          onChange={handleChange}
          value={value}
        />
      </HeaderBox>
      <ResultsBox>
        {results.length === 0 && !firstRequestMade && (
          <Typography size='sm'>Encuentra tu serie favorita</Typography>
        )}
        {results.length === 0 && firstRequestMade && (
          <Typography size='sm'>Sin resultados</Typography>
        )}
        {error && (
          <Typography size='sm'>
            Hubo un problema al recuperar las series
          </Typography>
        )}
        <Grid gap={1.5} cols='1'>
          {results.map(({ _id, name, episodes, imageSm }) => (
            <Link key={_id} href={`/serie/${_id}`}>
              <a onClick={hideSeriesFinder}>
                <Result
                  name={name}
                  totalEpisodes={episodes.length}
                  thumbnail={imageSm}
                />
              </a>
            </Link>
          ))}
        </Grid>
      </ResultsBox>
    </SeriesFinderBox>
  );
};
