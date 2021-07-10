import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
