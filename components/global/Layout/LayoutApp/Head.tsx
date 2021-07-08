import React, { FC } from 'react';
import NextHead from 'next/head';

const Head: FC<{ title: string }> = ({ title }) => (
  <NextHead>
    {title && <title>{title}</title>}
    <meta charSet='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, user-scalable=no'
    />
    <link rel='icon' type='image/svg+xml' href='/vimox-logo.svg' sizes='any' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <meta name='theme-color' content='#12141D' />
  </NextHead>
);

export default Head;
