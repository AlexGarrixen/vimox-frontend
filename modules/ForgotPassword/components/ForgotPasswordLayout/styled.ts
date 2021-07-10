import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  margin-top: calc(var(--heightSidebar) * -1);
  background-color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
