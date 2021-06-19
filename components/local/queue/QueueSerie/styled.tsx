import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';

export const QueueSerieBox = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: box-shadow 250ms linear;

  :hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageBox = styled.div`
  position: relative;

  ::before {
    content: '';
    padding-top: 56.25%;
    display: block;
  }
`;

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ContentBox = styled.div`
  margin-top: 12px;

  & > * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ActionsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;
