import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

export const ThumbnailBox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  transition: box-shadow 250ms linear;

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  :hover > button {
    opacity: 1;
  }
`;

export const Thumbnail = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const PlayButton = styled.button`
  border: none;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 250ms;
  cursor: pointer;
`;
