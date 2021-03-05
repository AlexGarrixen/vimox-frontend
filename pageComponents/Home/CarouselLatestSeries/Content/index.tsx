import React from 'react';
import Slider from 'react-slick';
import Measure from 'react-measure';
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
  const [height, setHeight] = React.useState(0);

  return (
    <ContentBox>
      <Measure
        bound
        onResize={(contentRect) => {
          contentRect.entry && setHeight(contentRect.entry.height);
        }}
      >
        {({ measureRef }) => (
          <Container ref={measureRef}>
            <Slider
              slidesToShow={1}
              arrows={false}
              dots={false}
              fade={true}
              ref={setRefSlider}
              asNavFor={refSliderNav}
            >
              {data.map(({ _id, name, geners }, idx) => (
                <div key={_id}>
                  <SlideContent
                    index={idx}
                    id={_id}
                    name={name}
                    geners={geners}
                    style={{ minHeight: height }}
                  />
                </div>
              ))}
            </Slider>
          </Container>
        )}
      </Measure>
    </ContentBox>
  );
};
