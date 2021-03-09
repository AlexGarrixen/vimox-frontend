import React from 'react';
import { useQuery } from 'react-query';
import { Select } from '@components/Form/Select';
import { Skeleton } from './Skeleton';
import { getGeners } from '@services/geners';
import { useFilter } from './hook';
import { FilterBox, FlexibleItemsBox } from './styled';

export const Filter = () => {
  const { data, isLoading, error } = useQuery(
    'geners_directory',
    async () => getGeners(),
    {
      refetchIntervalInBackground: false,
    }
  );

  const { generOpts, handleChangeGener, handleChangeType } = useFilter(data);

  if (error) return <p>{error}</p>;

  if (isLoading) return <Skeleton />;

  return (
    <FilterBox>
      <FlexibleItemsBox>
        <Select
          placeholder='Tipo'
          onChange={handleChangeType}
          options={[
            { text: 'Tv', value: 'Tipo: tv' },
            { text: 'Pelicula', value: 'Tipo: movie' },
          ]}
        />
        <Select
          placeholder='Genero'
          onChange={handleChangeGener}
          options={generOpts}
        />
      </FlexibleItemsBox>
    </FilterBox>
  );
};
