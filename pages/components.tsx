import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';

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
    </Container>
  </LayoutApp>
);

export default Components;
