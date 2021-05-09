import React from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { Image } from '@components/DataDisplay/Image';
import { Context } from '../Context';

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

export const CoverImage = () => {
  const { data, activeIndex } = React.useContext(Context);
  const transitions = useTransition(data[activeIndex], (item) => item._id, {
    from: {
      opacity: 1,
    },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions.map(({ key, props: cssProps, item }) => (
        <animated.div style={cssProps} key={key}>
          <ImageStyled src={item.imageLg} />
        </animated.div>
      ))}
    </>
  );
};
