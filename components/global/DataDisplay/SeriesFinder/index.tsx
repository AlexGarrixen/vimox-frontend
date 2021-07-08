import React from 'react';
import { SearchOutlined } from '@components/Icon/SearchOutlined';
import { useSearch } from '@hooks/useSearch';
import { searchSerie } from '@services/search';
import { Results } from './Results';
import { SeriesFinderBox, HeaderBox, TextBox, ResultsBox } from './styled';

export const SeriesFinder = () => {
  const { data, value, error, firstRequestMade, handleChange } = useSearch(
    searchSerie,
    {
      sendArgs: (value) => ({ title: value }),
    }
  );

  return (
    <SeriesFinderBox>
      <HeaderBox>
        <SearchOutlined colorScheme='white' />
        <TextBox
          placeholder='Buscar serie'
          onChange={handleChange}
          value={value}
        />
      </HeaderBox>
      <ResultsBox>
        <Results
          error={error}
          data={data}
          firstRequestMade={firstRequestMade}
        />
      </ResultsBox>
    </SeriesFinderBox>
  );
};
