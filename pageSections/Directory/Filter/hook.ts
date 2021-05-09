import React from 'react';
import { useRouter } from 'next/router';
import qs from 'query-string';
import type { Gener } from '@globalTypes/generServices';

export const useFilter = (data: Gener[]) => {
  const router = useRouter();

  const generOpts = React.useMemo(
    () =>
      Array.isArray(data)
        ? [
            {
              text: 'Todos',
              value: 'Genero: Todos',
            },
            ...data.map(({ name }) => ({
              text: name,
              value: `Genero: ${name}`,
            })),
          ]
        : [],
    [data]
  );

  const handleChangeType = React.useCallback(
    (value: string) => {
      const { query } = qs.parseUrl(router.asPath);
      value = value.split(':')[1].trim();

      router.push(router.pathname, {
        query: {
          ...query,
          type: value,
        },
      });
    },
    [router.query]
  );

  const handleChangeGener = React.useCallback(
    (value: string) => {
      const { query } = qs.parseUrl(router.asPath);
      value = value.split(':')[1].trim();

      const gener = data.find(({ name }) => name === value);

      router.push(router.pathname, {
        query: {
          ...query,
          gener: gener ? gener._id : '',
        },
      });
    },
    [router.query, data]
  );

  return {
    handleChangeType,
    handleChangeGener,
    generOpts,
  };
};
