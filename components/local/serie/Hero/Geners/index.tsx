import React from 'react';
import styled from 'styled-components';
import { Typography } from '@components/DataDisplay/Typography';
import { Gener } from '@globalTypes/generServices';

const Root = styled.div`
  display: flex;
  margin-bottom: 14px;

  p:not(:last-child) {
    margin-right: 12px;
  }

  p:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }
`;

type GenersProps = {
  geners: Gener[];
};

export const Geners = ({ geners }: GenersProps) => (
  <Root>
    {Array.isArray(geners) &&
      geners.map(({ _id, name }) => (
        <Typography key={_id} white>
          {name}
        </Typography>
      ))}
  </Root>
);
