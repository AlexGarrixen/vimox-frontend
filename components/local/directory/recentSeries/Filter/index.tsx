import React from 'react';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { Dropdown, DropdownOption } from '@components/Overlays/Dropdown';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { Skeleton } from './Skeleton';
import { getGeners } from '@services/geners';
import { getCategories } from '@services/categories';
import { Root } from './styled';

const maxHeightOptions = 330;

export const Filter = () => {
  const { setFilterQuery } = useFilterQuery();
  const genersQuery = useQuery('geners', () => getGeners(), {
    refetchIntervalInBackground: false,
    cacheTime: 900000,
  });
  const typesQuery = useQuery('types', () => getCategories(), {
    cacheTime: 900000,
    refetchIntervalInBackground: false,
  });
  const error = genersQuery.error || typesQuery.error;
  const isLoading = genersQuery.isLoading || typesQuery.isLoading;

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
          onChangeOption={(value) =>
            setFilterQuery('type', value, { removeInMatchValue: '' })
          }
          maxHeightOptions={maxHeightOptions}
        >
          <DropdownOption value='' label='Todos' />
          {Array.isArray(typesQuery.data) &&
            typesQuery.data.map(({ name }) => (
              <DropdownOption key={name} value={name} label={name} />
            ))}
        </Dropdown>
        <Dropdown
          text='Genero'
          getCustomText={(value, label) => `Genero: ${label}`}
          onChangeOption={(value) =>
            setFilterQuery('gener', value, { removeInMatchValue: '' })
          }
          maxHeightOptions={maxHeightOptions}
        >
          <DropdownOption value='' label='Todos' />
          {Array.isArray(genersQuery.data) &&
            genersQuery.data.map(({ name }) => (
              <DropdownOption key={name} value={name} label={name} />
            ))}
        </Dropdown>
      </Slider>
    </Root>
  );
};
