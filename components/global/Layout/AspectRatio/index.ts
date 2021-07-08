import styled from 'styled-components';

const calculateRatio = (ratio: string) => {
  const [width = '0', height = '0'] = ratio.split(':');
  const aspectRatio = (parseInt(height) / parseInt(width)) * 100;
  return aspectRatio;
};

export const AspectRatio = styled.div<AspectRatioProps>`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    padding-top: ${({ ratio }) => `${calculateRatio(ratio)}%`};
    display: block;
  }

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

type AspectRatioProps = {
  ratio?: string;
  className?: string;
};
