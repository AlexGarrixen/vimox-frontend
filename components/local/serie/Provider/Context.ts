import React from 'react';
import { ContextValue } from './types';

export const Context = React.createContext<Partial<ContextValue>>({});
