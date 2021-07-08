import styled from 'styled-components';

export const Root = styled.div`
  display: inline-block;
  position: relative;
  color: ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 600;
  padding: 10px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  font-size: ${({ theme }) => theme.fontSize.sm[0]};
  min-width: 150px;
  cursor: pointer;
`;

export const ListOptionsBox = styled.ul<{ maxHeight?: number }>`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  min-width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  z-index: 3;

  ${({ maxHeight }) => maxHeight && { maxHeight }}
`;
