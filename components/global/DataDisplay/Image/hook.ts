import { useRef, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const useImageLazy = (src: string) => {
  const { inView, ref: refCb } = useInView({ triggerOnce: true });
  const refImg = useRef<HTMLImageElement>(null);

  const ref = useCallback((node?: HTMLImageElement) => {
    refCb(node);
    refImg.current = node;
  }, []);

  useEffect(() => {
    if (refImg.current && inView) {
      const image = refImg.current;
      image.src = image.dataset.src;
      image.onload = () => (image.style.opacity = '1');
    }
  }, [refImg, inView, src]);

  return ref;
};

export default useImageLazy;
