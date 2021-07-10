import React from 'react';
import { GetServerSideProps } from 'next';
import { LayoutApp } from '@components/Layout/LayoutApp';
import EmailVerificationModule from '@modules/EmailVerification';

const EmailVerification = ({ token }: EmailVerifiedProps) => (
  <LayoutApp title='Vimox - email confirmation' verticallyCenterContent>
    <EmailVerificationModule token={token} />
  </LayoutApp>
);

type EmailVerifiedProps = {
  token: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      token: ctx.query.token,
    },
  };
};

export default EmailVerification;
