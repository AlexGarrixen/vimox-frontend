import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import { Wrapper } from './styled';

const Genders = ({ geners }: GenersProps) => (
  <Wrapper>
    {Array.isArray(geners) &&
      geners.slice(0, 3).map((gener) => (
        <Text key={gener} colorScheme='white'>
          {gener}
        </Text>
      ))}
  </Wrapper>
);

type GenersProps = {
  geners: string[];
};

export default Genders;
