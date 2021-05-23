import React from 'react';
import styled from 'styled-components';
import { AspectRatio } from '@components/Layout/AspectRatio';

const PlayerBox = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

type PlayerProps = {
  src: string;
};

export const Player = ({ src: srcProp }: PlayerProps) => {
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
