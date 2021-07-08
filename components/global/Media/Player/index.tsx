import React, { FC } from 'react';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { PlayerBox } from './styled';

export const Player: FC<PlayerProps> = ({ src: srcProp }) => {
  const [src, setSrc] = React.useState(srcProp);

  React.useEffect(() => {
    setSrc(srcProp);
  }, [srcProp]);

  return (
    <PlayerBox>
      <AspectRatio ratio='16:9'>
        <iframe frameBorder='0' src={src} allowFullScreen />
      </AspectRatio>
    </PlayerBox>
  );
};

type PlayerProps = {
  src: string;
};
