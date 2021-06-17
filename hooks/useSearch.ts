import React from 'react';
import jsCache from 'js-cache';

const cachedSearchs = new jsCache();

interface UseSearchValues<T = unknown> {
  isLoading: boolean;
  error: unknown;
  value: string | number;
  data: T | null;
  firstRequestMade: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type SendArgs = (value: string | number) => Record<string, unknown>;

type RequestFn<T = unknown> = (args?: Record<string, unknown>) => Promise<T>;

interface Opts {
  sendArgs?: SendArgs;
  cacheDuration?: number;
}

export const useSearch = <T = unknown>(
  requestFn: RequestFn<T>,
  opts: Opts = {}
): UseSearchValues<T> => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState('');
  const firstRequestMade = React.useRef(false);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [value]
  );

  const requestSearch = async (value: string) => {
    firstRequestMade.current = true;
    setLoading(true);

    try {
      const data = await requestFn(opts?.sendArgs ? opts.sendArgs(value) : {});
      cachedSearchs.set(value, data, opts?.cacheDuration || 900000);
      setData(data);
      setLoading(false);
    } catch (reason) {
      setError(reason);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (value.length > 2) {
      const cachedData = cachedSearchs.get(value);

      if (!cachedData) requestSearch(value);
      else setData(cachedData);
    }

    if (value.length < 2 && firstRequestMade.current) setData(null);
  }, [value]);

  return {
    handleChange,
    isLoading,
    error,
    value,
    data,
    firstRequestMade: firstRequestMade.current,
  };
};
