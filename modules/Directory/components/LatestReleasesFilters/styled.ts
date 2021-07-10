import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 330px;
  margin-bottom: calc(-330px + 30px);
  overflow: hidden;
  position: relative;
  z-index: 1;
  pointer-events: none;

  .carousel_filter {
    pointer-events: initial;
  }

  .carousel_filter .slick-slide > div {
    margin: 0 10px;
    width: max-content;
  }

  .carousel_filter .slick-list {
    padding-top: 4px;
    margin: 0 -10px;
    overflow: initial;
  }
`;
