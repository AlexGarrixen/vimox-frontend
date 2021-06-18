import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/DataDisplay/Text';

const Root = styled.div`
  display: flex;
  align-items: center;

  p:not(:last-child) {
    margin-right: 12px;
  }

  p:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }

  p:last-child::after {
    content: '...';
  }
`;

type GenersProps = {
  geners: string[];
};

export const Geners = ({ geners }: GenersProps) => (
  <Root>
    {Array.isArray(geners) &&
      geners.slice(0, 3).map((gener) => (
        <Text key={gener} colorScheme='white'>
          {gener}
        </Text>
      ))}
  </Root>
);
