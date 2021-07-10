import styled from 'styled-components';

export const Wrapper = styled.div`
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
