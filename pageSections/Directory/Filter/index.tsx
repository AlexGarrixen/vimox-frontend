import React from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Select } from '@components/Form/Select';
import { Skeleton } from './Skeleton';
import { getGeners } from '@services/geners';
import { useFilter } from './hook';
import { FilterBox } from './styled';

const maxHeightOptions = 330;

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
      <Slider
        variableWidth
        arrows={false}
        dots={false}
        infinite={false}
        className='carousel_filter'
      >
        <Select
          placeholder='Tipo'
          onChange={handleChangeType}
          maxHeightOptions={maxHeightOptions}
          options={[
            { text: 'Tv', value: 'Tipo: tv' },
            { text: 'Pelicula', value: 'Tipo: pelicula' },
          ]}
        />
        <Select
          placeholder='Genero'
          onChange={handleChangeGener}
          maxHeightOptions={maxHeightOptions}
          options={generOpts}
        />
      </Slider>
    </FilterBox>
  );
};
