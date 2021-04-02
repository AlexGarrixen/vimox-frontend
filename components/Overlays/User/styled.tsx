import styled from 'styled-components';

export const UserButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  position: relative;
`;

export const MenuBox = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

export const Option = styled.li`
  padding: 8px 10px;
  white-space: nowrap;
  text-align: left;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }

  :not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  }
`;
