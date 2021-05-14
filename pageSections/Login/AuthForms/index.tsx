import React from 'react';
import { LayoutGrid } from '@localComponents/login/LayoutGrid';
import { SignupForm } from '@localComponents/login/SignupForm';
import { LoginForm } from '@localComponents/login/LoginForm';
import { Separator } from '@localComponents/login/Separator';

export const AuthForms = () => (
  <LayoutGrid>
    <SignupForm />
    <Separator />
    <LoginForm />
  </LayoutGrid>
);
