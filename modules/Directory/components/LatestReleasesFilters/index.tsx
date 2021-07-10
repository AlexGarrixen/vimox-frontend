import React from 'react';
import Slider from 'react-slick';
import FilterType from '@modules/Directory/components/LatestReleasesFilterType';
import FilterGender from '@modules/Directory/components/LatestReleasesFilterGender';
import { Wrapper } from './styled';

const Filters = () => {
  return (
    <Wrapper>
      <Slider
        variableWidth
        arrows={false}
        dots={false}
        infinite={false}
        className='carousel_filter'
      >
        <FilterType />
        <FilterGender />
      </Slider>
    </Wrapper>
  );
};

export default Filters;
