import styled from 'styled-components';

export const InputPasswordBox = styled.div<{ fullWidth?: boolean }>`
  display: inline-block;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'};
`;
