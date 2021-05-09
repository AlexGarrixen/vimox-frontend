import React from 'react';
import Link from 'next/link';
import { Image } from '@components/DataDisplay/Image';
import { Root } from './styled';

type ThumbnailSlideProps = {
  isActive?: boolean;
  img?: string;
  serieId: string;
};

export const ThumbnailSlide = ({
  isActive,
  img,
  serieId,
}: ThumbnailSlideProps) => (
  <Root isActive={isActive}>
    <Link href={`/serie/${serieId}`}>
      <a>
        <Image src={img} />
      </a>
    </Link>
  </Root>
);
