import styled from 'styled-components';
import { ImageTypeMap } from '.';

export const ImageStyled = styled.img<Pick<ImageTypeMap['props'], 'margin'>>`
  opacity: 0;
  transition: 0.3s opacity linear;

  ${({ margin }) => margin && `margin: ${margin};`}
`;
