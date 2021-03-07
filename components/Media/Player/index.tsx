import React from 'react';
import styled from 'styled-components';

const PlayerBox = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    padding-top: 42.85%;
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
      <Iframe frameBorder='0' src={src} allowFullScreen />
    </PlayerBox>
  );
};
