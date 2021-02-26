import styled from 'styled-components';

export const EpisodesCarouselBox = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    overflow: hidden;
    flex: 1;
    height: 100%;
    position: relative;
    display: initial;

    .carousel {
      height: 100%;
    }

    .carousel .slick-list {
      height: 100%;
    }

    .carousel .slick-track {
      height: 100%;
    }

    .carousel .slick-slide > div:first-child {
      height: 100%;
    }
  }
`;

export const ArrowsBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const ArrowButton = styled.button`
  border: none;
  padding: 16px 26px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
`;
