import React, { useState } from 'react';
import Slider from 'react-slick';
import Measure from 'react-measure';
import SerieSlide from '../LatestSeriesCarouselSlide';
import useSlidesControl from '@modules/Home/hooks/useSlidesControl';
import useLatestSeries from '@modules/Home/hooks/useLatestSeries';

const LatestSeriesCarousel = () => {
  const { slider, navSlider, activeSlide } = useSlidesControl();
  const { data } = useLatestSeries();
  const [slideHeight, setHeight] = useState(0);

  return (
    <Measure
      bound
      onResize={(contentRect) => {
        contentRect.entry && setHeight(contentRect.entry.height);
      }}
    >
      {({ measureRef }) => (
        <div ref={measureRef}>
          <Slider
            slidesToShow={1}
            arrows={false}
            dots={false}
            fade={true}
            ref={(ref) => slider.setRef(ref)}
            asNavFor={navSlider.ref}
            swipe={false}
          >
            {Array.isArray(data.series) &&
              data.series.map(({ _id, name, geners }, idx) => (
                <div key={_id}>
                  <SerieSlide
                    id={_id}
                    name={name}
                    geners={geners}
                    style={{ minHeight: slideHeight }}
                    isActive={idx === activeSlide}
                  />
                </div>
              ))}
          </Slider>
        </div>
      )}
    </Measure>
  );
};

export default LatestSeriesCarousel;
