import styled from 'styled-components';

export const PlayerBox = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;
