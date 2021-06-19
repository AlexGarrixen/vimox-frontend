import styled from 'styled-components';

export const SeriesFinderBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;

  & > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: calc(100% - 32px);
    transform: translateX(-50%);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const TextBox = styled.input`
  flex: 1;
  height: 30px;
  color: #fff;
  background: transparent;
  border: none;
  margin-left: 16px;
`;

export const ResultsBox = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 16px;
`;
