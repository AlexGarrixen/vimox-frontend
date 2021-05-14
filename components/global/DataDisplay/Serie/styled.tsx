import styled from 'styled-components';

export const SerieBox = styled.div``;

export const ThumbnailBox = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 250ms linear;

  ::before {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.colors.gray[300]};
    padding-top: 150%;
  }

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`;

export const ContentBox = styled.div`
  margin-top: 16px;

  h6,
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
