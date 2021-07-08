import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

export const ResultBox = styled.div`
  position: relative;
  height: 68px;
  padding-left: calc(60px + 16px);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 30px);
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 6px;
  }
`;

export const Thumbnail = styled(Image)`
  position: absolute;
  width: 60px;
  height: 50px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding-right: 16px;
`;
