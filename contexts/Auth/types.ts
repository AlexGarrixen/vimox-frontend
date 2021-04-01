import React from 'react';
import { PostLoginResponse } from '@globalTypes/authServices';

export type Session = {
  loading: boolean;
  data: Partial<PostLoginResponse> | null;
} | null;

export type AuthContextValue = {
  session: Session;
  setSession: React.Dispatch<any>;
};
