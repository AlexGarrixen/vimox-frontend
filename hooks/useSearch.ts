import React from 'react';

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
}

export const useSearch = <T = unknown>(
  requestFn: RequestFn<T>,
  opts: Opts = {}
): UseSearchValues<T> => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState('');
  const cached = React.useRef({});
  const firstRequestMade = React.useRef(false);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [value]
  );

  const requestSearch = async () => {
    firstRequestMade.current = true;
    setLoading(true);

    try {
      const data = await requestFn(opts?.sendArgs ? opts.sendArgs(value) : {});
      cached.current[value] = data;
      setData(data);
      setLoading(false);
    } catch (reason) {
      setError(reason);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (value.length > 2) {
      if (!cached.current[value]) requestSearch();
      else setData(cached.current[value]);
    }

    if (value.length < 2 && firstRequestMade.current) setData(null);
  }, [value, cached]);

  return {
    handleChange,
    isLoading,
    error,
    value,
    data,
    firstRequestMade: firstRequestMade.current,
  };
};
