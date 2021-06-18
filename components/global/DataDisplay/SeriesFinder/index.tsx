import React from 'react';
import Link from 'next/link';
import { Search } from '@components/Icon/Search';
import { Grid } from '@components/Layout/Grid';
import { Text } from '@components/DataDisplay/Text';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import { useSearch } from '@hooks/useSearch';
import { searchSerie } from '@services/search';
import { Result } from './Result';
import { SeriesFinderBox, HeaderBox, TextBox, ResultsBox } from './styled';

export const SeriesFinder = () => {
  const { hideSeriesFinder } = useSeriesFinder();
  const { data, value, error, firstRequestMade, handleChange } = useSearch(
    searchSerie,
    {
      sendArgs: (value) => ({ title: value }),
    }
  );

  const renderResults = () => {
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

    if (
      (!data || (Array.isArray(data) && data.length === 0)) &&
      firstRequestMade
    )
      return (
        <Text size='sm' colorScheme='secondary'>
          Sin resultados
        </Text>
      );

    return (
      <Grid gap={1.5} cols={1}>
        {Array.isArray(data) &&
          data.map(({ _id, name, episodes, thumbnail }) => (
            <Link key={_id} href={`/serie/${_id}`}>
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
      <ResultsBox>{renderResults()}</ResultsBox>
    </SeriesFinderBox>
  );
};
