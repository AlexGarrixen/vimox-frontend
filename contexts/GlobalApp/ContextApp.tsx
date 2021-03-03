import React from 'react';
import type { ContextAppValue } from './contextApp';

export const ContextApp = React.createContext<Partial<ContextAppValue>>({});
