import styled from 'styled-components';

export const SelectBox = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.sm[0]};
  min-width: 150px;
  cursor: pointer;
`;

export const OptionsBox = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  top: calc(100% + 3px);
  left: 0;
  min-width: 100%;
  border-radius: 6px;
  overflow: hidden;
  z-index: 3;
`;

export const Option = styled.li`
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 8px 10px;
  white-space: nowrap;

  :hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;
