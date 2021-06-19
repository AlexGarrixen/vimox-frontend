import styled from 'styled-components';

export const UserButton = styled.button`
  cursor: pointer;
  position: relative;
  background-color: transparent;
`;

export const MenuBox = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 230px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
`;

export const HeaderInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};

  & > :first-child {
    flex-shrink: 0;
  }

  & > :last-child {
    margin-left: 10px;
  }
`;

export const Option = styled.li`
  padding: 12px 10px;
  white-space: nowrap;
  text-align: left;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }

  :not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  }
`;
