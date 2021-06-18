import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { ButtonBase } from '@components/Form/ButtonBase';
import { Button } from '@components/Form/Button';
import { IconButton } from '@components/Form/IconButton';
import { Input } from '@components/Form/Input';
import { Grid } from '@components/Layout/Grid';
import { PlayOutlined } from '@components/Icon/PlayOutlined';

const Components = () => (
  <LayoutApp>
    <Container>
      <Spacing size={80} />
      <Title
        colorScheme='white'
        size={{ xs: 'base', sm: 'xl', md: '2xl', lg: '3xl' }}
        level='2'
      >
        Heading
      </Title>
      <Text colorScheme='secondary' size='lg'>
        paragraph
      </Text>
      <ButtonBase colorScheme='primary'>Button</ButtonBase>
      <Input placeholder='placeholder' type='text' />
      <Input placeholder='placeholder' type='number' />
      <Input placeholder='placeholder' type='date' />
      <Input placeholder='placeholder' type='password' />
      <Grid cols={{ xs: 2, md: 3, lg: 4 }} gap={1} justifyItems='center'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </Grid>
      <PlayOutlined colorScheme='white' size='3x' />
    </Container>
  </LayoutApp>
);

export default Components;
