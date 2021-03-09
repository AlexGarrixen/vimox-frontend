import React from 'react';
import type { ContextAppValue } from './types';

export const ContextApp = React.createContext<Partial<ContextAppValue>>({});
