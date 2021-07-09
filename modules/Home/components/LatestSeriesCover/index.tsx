import React from 'react';
import { useTransition, a } from 'react-spring';
import useLatestSeries from '@modules/Home/hooks/useLatestSeries';
import useSlidesControl from '@modules/Home/hooks/useSlidesControl';
import { ImageStyled } from './styled';

const SerieCover = () => {
  const {
    data: { series },
  } = useLatestSeries();
  const { activeSlide } = useSlidesControl();
  const transitions = useTransition(activeSlide, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    key: activeSlide,
  });

  return transitions((styles, idx) => (
    <a.div style={styles}>
      <ImageStyled src={series[idx]?.bannerImage} />
    </a.div>
  ));
};

export default SerieCover;
