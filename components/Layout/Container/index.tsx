import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.screens.lg};
  margin: 0 auto;
  padding: 0 24px;
`;
