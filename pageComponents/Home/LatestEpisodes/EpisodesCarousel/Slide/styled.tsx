import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

export const SlideBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  height: 100%;
  border-radius: 6px;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(18, 20, 29, 0.95) 100%
    );
    z-index: 1;
  }
`;

export const ContentBox = styled.div`
  position: absolute;
  left: 0;
  padding: 20px;
  bottom: 0;
  z-index: 1;
`;

export const PlayButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
