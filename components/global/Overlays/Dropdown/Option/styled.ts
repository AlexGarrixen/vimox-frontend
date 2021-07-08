import styled from 'styled-components';

export const DropdownOptionStyled = styled.li`
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 8px 10px;
  white-space: nowrap;

  :hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;
