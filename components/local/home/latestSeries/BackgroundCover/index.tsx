import React from 'react';
import styled from 'styled-components';
import { useTransition, a } from 'react-spring';
import { Image } from '@components/DataDisplay/Image';
import { Context } from '../Provider';

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  display: block;
  object-fit: cover;
  object-position: center;
`;

export const BackgroundCover = () => {
  const { series, activeIndex } = React.useContext(Context);
  const transitions = useTransition(activeIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    key: activeIndex,
  });

  return transitions((styles, idx) => (
    <a.div style={styles}>
      <ImageStyled src={series[idx].bannerImage} />
    </a.div>
  ));
};
