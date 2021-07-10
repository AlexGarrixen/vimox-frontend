import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  margin-top: calc(var(--heightSidebar) * -1);
  background-color: ${({ theme }) => theme.colors.gray[500]};
  background-image: url(/images/bg-waves.png);
  background-size: cover;
  background-position: 20% center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    background-position: center;
  }
`;
