import React from 'react';
import type { Querys } from './Provider';

type DirectoryContextValue = {
  querys: Record<string, string>;
};

export const DirectoryContext = React.createContext<
  Partial<DirectoryContextValue>
>({});
