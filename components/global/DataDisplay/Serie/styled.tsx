import styled from 'styled-components';

export const SerieBox = styled.div`
  position: relative;
`;

export const ThumbnailBox = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  transition: box-shadow 250ms linear;
  background-color: ${({ theme }) => theme.colors.gray[300]};

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  img {
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`;

export const BookmarkBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 50%;
`;
