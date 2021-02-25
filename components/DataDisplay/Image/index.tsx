import React from 'react';
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

type ImageProps = {
  margin?: string;
} & React.ComponentPropsWithRef<'img'>;

const ImageStyled = styled.img<ImageProps>`
  opacity: 0;
  transition: 0.3s opacity linear;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const Image = ({ src, ...other }: ImageProps) => {
  const { inView, ref } = useInView({ triggerOnce: true });
  const refImg = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (refImg.current && inView) {
      const image = refImg.current;
      image.src = image.dataset.src;
      image.onload = () => (image.style.opacity = '1');
    }
  }, [refImg, inView]);

  return (
    <ImageStyled
      src=''
      data-src={src}
      ref={(refElement) => {
        ref(refElement);
        refImg.current = refElement;
      }}
      {...other}
    />
  );
};
