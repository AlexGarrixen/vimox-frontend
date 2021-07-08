import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const TabBottonNavBox = styled.nav`
  position: fixed;
  bottom: 14px;
  left: 0;
  right: 0;
  z-index: 5;

  & > div {
    display: flex;
    justify-content: center;
  }
`;

export const TabsBox = styled(animated.ul)`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  display: inline-flex;
  padding: 10px;
  border-radius: 25px;
  overflow-y: hidden;
  overflow-x: auto;
  flex-wrap: nowrap;
  max-width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  will-change: transform;
`;

export const Tab = styled.li`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};

  & > a {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }

  &:not(:last-of-type) {
    margin-right: 14px;
  }
`;

export const IconBox = styled.div<{
  isActive?: boolean;
}>`
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;
