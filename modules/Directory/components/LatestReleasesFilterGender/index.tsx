import React from 'react';
import { useQuery } from 'react-query';
import { Dropdown, DropdownOption } from '@components/Overlays/Dropdown';
import Skeleton from '@modules/Directory/components/LatestReleasesFilterSkeleton';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { getGeners } from '@services/geners';

const FilterGender = () => {
  const { setFilterQuery } = useFilterQuery();
  const { data, isLoading, error } = useQuery('geners', () => getGeners(), {
    refetchIntervalInBackground: false,
    cacheTime: 900000,
  });

  if (error) return null;
  if (isLoading) return <Skeleton />;
  return (
    <Dropdown
      text='Genero'
      getCustomText={(value, label) => `Genero: ${label}`}
      onChangeOption={(value) =>
        setFilterQuery('gener', value, { removeInMatchValue: '' })
      }
      maxHeightOptions={330}
    >
      <DropdownOption value='' label='Todos' />
      {Array.isArray(data) &&
        data.map(({ name }) => (
          <DropdownOption key={name} value={name} label={name} />
        ))}
    </Dropdown>
  );
};

export default FilterGender;
