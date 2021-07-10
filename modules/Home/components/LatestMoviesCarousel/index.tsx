import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import Slider from 'react-slick';
import { Serie } from '@components/DataDisplay/Serie';
import { ChevronLeftFilled } from '@components/Icon/ChevronLeftFilled';
import { ChevronRightFilled } from '@components/Icon/ChevronRightFilled';
import useLatestMovies from '@modules/Home/hooks/useLatestMovies';
import { Root, ArrowButton } from './styled';

const MoviesCarousel = () => {
  const { data } = useLatestMovies();
  const [slider, setSlider] = React.useState<Slider>(null);

  return (
    <Root>
      <ArrowButton onClick={slider?.slickPrev}>
        <ChevronLeftFilled colorScheme='white' />
      </ArrowButton>
      <Slider
        ref={setSlider}
        arrows={false}
        slidesToShow={5}
        className='carousel'
        infinite
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {Array.isArray(data.series) &&
          data.series.map(({ _id, name, thumbnail, geners, episodes }) => (
            <Link key={_id} href={`/serie/${slugify(name)}/${_id}`}>
              <a>
                <Serie
                  name={name}
                  thumbnail={thumbnail}
                  geners={geners}
                  countEpisodes={episodes}
                />
              </a>
            </Link>
          ))}
      </Slider>
      <ArrowButton toRight onClick={slider?.slickNext}>
        <ChevronRightFilled colorScheme='white' />
      </ArrowButton>
    </Root>
  );
};

export default MoviesCarousel;
