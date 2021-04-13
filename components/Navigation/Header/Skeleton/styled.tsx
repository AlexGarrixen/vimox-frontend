import styled from 'styled-components';

export const SkeletonBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 30px;
  overflow: hidden;

  & > div:first-child {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    justify-content: space-between;

    & > div:first-child {
      display: inherit;
    }
  }
`;

export const LinksBox = styled.div`
  display: inherit;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SkeletonLink = styled.div`
  height: 20px;
  width: 70px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
`;
