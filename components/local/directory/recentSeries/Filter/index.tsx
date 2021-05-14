import React from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Dropdown, DropdownOption } from '@components/Overlays/Dropdown';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { Skeleton } from './Skeleton';
import { getGeners } from '@services/geners';
import { Root } from './styled';

const maxHeightOptions = 330;

export const Filter = () => {
  const { setFilterQuery } = useFilterQuery();
  const { data, isLoading, error } = useQuery(
    'geners_directory',
    async () => getGeners(),
    {
      refetchIntervalInBackground: false,
    }
  );

  if (error) return <p>{error}</p>;

  if (isLoading) return <Skeleton />;

  return (
    <Root>
      <Slider
        variableWidth
        arrows={false}
        dots={false}
        infinite={false}
        className='carousel_filter'
      >
        <Dropdown
          text='Tipo'
          getCustomText={(value, label) => `Tipo: ${label}`}
          onChange={(value) =>
            setFilterQuery('type', value, { matchingValueToRemove: 'all' })
          }
          maxHeightOptions={maxHeightOptions}
        >
          <DropdownOption value='all' label='Todos' />
          <DropdownOption value='tv' label='Tv' />
          <DropdownOption value='pelicula' label='Pelicula' />
        </Dropdown>
        <Dropdown
          text='Genero'
          getCustomText={(value, label) => `Genero: ${label}`}
          onChange={(value) =>
            setFilterQuery('gener', value, { matchingValueToRemove: 'all' })
          }
          maxHeightOptions={maxHeightOptions}
        >
          <DropdownOption value='all' label='Todos' />
          {Array.isArray(data) &&
            data.map(({ _id, name }) => (
              <DropdownOption key={_id} value={_id} label={name} />
            ))}
        </Dropdown>
      </Slider>
    </Root>
  );
};
