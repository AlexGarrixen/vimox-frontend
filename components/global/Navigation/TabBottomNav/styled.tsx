import styled, { css } from 'styled-components';

type IconBoxProps = {
  isActive?: boolean;
};

export const TabBottonNavBox = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  & > div {
    display: flex;
    background-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Tab = styled.li`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 4px 0;

  & > a {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
  }

  &:not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const IconBox = styled.div<IconBoxProps>`
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 4px;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;
