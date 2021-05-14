import styled from 'styled-components';

export const SkeletonBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  height: 50px;
  padding: 0 12px;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SkeletonItem = styled.span`
  flex-shrink: 0;
  display: block;
  width: 60px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;
