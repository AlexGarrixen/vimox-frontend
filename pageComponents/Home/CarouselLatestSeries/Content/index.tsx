import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Context } from '../Context';
import { Container } from '@components/Layout/Container';
import { SlideContent } from './SlideContent';

export const ContentBox = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
`;

export const Content = () => {
  const { refSliderNav, data, setRefSlider } = React.useContext(Context);

  return (
    <ContentBox>
      <Container>
        <Slider
          slidesToShow={1}
          arrows={false}
          fade={true}
          ref={setRefSlider}
          asNavFor={refSliderNav}
        >
          {data.map((v, idx) => (
            <SlideContent index={idx} key={idx} />
          ))}
        </Slider>
      </Container>
    </ContentBox>
  );
};
