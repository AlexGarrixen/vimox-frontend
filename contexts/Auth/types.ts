import React from 'react';
import { ResponsePostLogin } from '@globalTypes/authServices';

export type Session = {
  loading: boolean;
  data: Partial<ResponsePostLogin> | null;
} | null;

export type AuthContextValue = {
  session: Session;
  setSession: React.Dispatch<any>;
};
