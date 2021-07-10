import React from 'react';
import { useQuery } from 'react-query';
import { Dropdown, DropdownOption } from '@components/Overlays/Dropdown';
import Skeleton from '@modules/Directory/components/LatestReleasesFilterSkeleton';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { getCategories } from '@services/categories';

const FilterType = () => {
  const { setFilterQuery } = useFilterQuery();
  const { data, isLoading, error } = useQuery('types', () => getCategories(), {
    cacheTime: 900000,
    refetchIntervalInBackground: false,
  });

  if (error) return null;
  if (isLoading) return <Skeleton />;
  return (
    <Dropdown
      text='Tipo'
      getCustomText={(value, label) => `Tipo: ${label}`}
      onChangeOption={(value) =>
        setFilterQuery('type', value, { removeInMatchValue: '' })
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

export default FilterType;
