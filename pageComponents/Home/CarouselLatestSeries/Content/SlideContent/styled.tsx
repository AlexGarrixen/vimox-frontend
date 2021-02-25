import styled from 'styled-components';

export const SlideContentBox = styled.div`
  max-width: 600px;
`;

export const GenersBox = styled.div`
  display: flex;

  p:not(:last-child) {
    margin-right: 12px;
  }

  p:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }
`;
