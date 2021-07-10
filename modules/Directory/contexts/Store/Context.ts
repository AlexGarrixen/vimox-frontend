import { createContext } from 'react';
import { ContextValue } from './types';

export const Context = createContext<Partial<ContextValue>>({});
