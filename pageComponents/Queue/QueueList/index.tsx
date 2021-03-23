import React from 'react';
import Link from 'next/link';
import { Grid } from '@components/Layout/Grid';
import { Container } from '@components/Layout/Container';
import { Typography } from '@components/DataDisplay/Typography';
import { QueueSerie } from './QueueSerie';

export const QueueList = (): JSX.Element => (
  <section style={{ marginTop: 80, marginBottom: 40 }}>
    <Container>
      <Typography as='h4' white margin='0 0 32px 0'>
        Sigue mirando
      </Typography>
      <Grid xs='1' sm='2' md='3' lg='4' gap={2}>
        <Link href='/'>
          <a>
            <QueueSerie />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <QueueSerie />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <QueueSerie />
          </a>
        </Link>
      </Grid>
    </Container>
  </section>
);
