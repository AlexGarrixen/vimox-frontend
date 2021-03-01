import styled from 'styled-components';
import { Typography } from '@components/DataDisplay/Typography';
import { Image } from '@components/DataDisplay/Image';

export const ThumbnailBox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 250ms linear;

  ::before {
    content: '';
    padding-top: 56.25%;
    display: block;
  }

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  :hover > button {
    opacity: 1;
  }
`;

export const Thumbnail = styled(Image)`
  position: absolute;
  object-fit: cover;
  object-position: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
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

export const Title = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
