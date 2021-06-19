import styled from 'styled-components';

export const ThumbnailBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
  transition: box-shadow 250ms linear;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  & > img {
    object-fit: cover;
    object-position: center;
  }
`;
