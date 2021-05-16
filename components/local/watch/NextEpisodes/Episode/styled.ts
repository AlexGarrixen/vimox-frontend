import styled from 'styled-components';

export const Root = styled.div`
  h6 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ThumbnailBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  transition: box-shadow 250ms linear;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  ::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
