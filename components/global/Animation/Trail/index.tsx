import React from 'react';
import { useTrail, a } from 'react-spring';
import { animations } from './animations';

type TrailProps = {
  children?: React.ReactNode;
  show?: boolean;
  delay?: number;
  animation?: keyof typeof animations;
};

export const TrailAnimation = ({
  children,
  animation,
  delay = 0,
  show = true,
}: TrailProps) => {
  const childrens = React.Children.toArray(children);
  const animationConfig = animations[animation];
  const animationProps = animationConfig ? animationConfig(show) : {};
  const trail = useTrail(childrens.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay,
    ...animationProps,
  });

  return (
    <>
      {trail.map((styles, idx) => (
        <a.div key={idx} style={styles}>
          {childrens[idx]}
        </a.div>
      ))}
    </>
  );
};
