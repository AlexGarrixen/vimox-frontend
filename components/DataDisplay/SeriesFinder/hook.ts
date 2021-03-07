import React from 'react';
import { getSeries } from '@services/series';
import type { Serie } from '@globalTypes/serieServices';

export const useFinder = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState<Serie[]>([]);
  const [error, setError] = React.useState(null);
  const cached = React.useRef({});
  const firstRequestMade = React.useRef(false);

  const requestSeries = async () => {
    if (!firstRequestMade.current) firstRequestMade.current = true;

    try {
      const { series } = await getSeries({ title: value });

      cached.current[value] = series;
      setResults(series);
    } catch (reason) {
      console.error(reason);
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  React.useEffect(() => {
    if (value.length > 2) {
      if (cached.current[value]) setResults(cached.current[value]);
      else requestSeries();
    }

    if (firstRequestMade.current && value.length < 2) setResults([]);
  }, [value]);

  return {
    value,
    results,
    error,
    handleChange,
    firstRequestMade: firstRequestMade.current,
  };
};
