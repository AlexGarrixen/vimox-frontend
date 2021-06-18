import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Container } from '@components/Layout/Container';
import { Spacing } from '@components/Layout/Spacing';
import { Title } from '@components/DataDisplay/Title';
import { Text } from '@components/DataDisplay/Text';
import { ButtonBase } from '@components/Form/ButtonBase';
import { Button } from '@components/Form/Buttonv2';
import { IconButton } from '@components/Form/IconButton';
import { Play } from '@components/Icon/Play';

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
      <Button startIcon={<Play />}>Button</Button>
      <IconButton>
        <Play />
      </IconButton>
    </Container>
  </LayoutApp>
);

export default Components;
