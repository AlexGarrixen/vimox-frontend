import React from 'react';
import Link from 'next/link';
import { Image } from '@components/DataDisplay/Image';
import { AspectRatio } from '@components/Layout/AspectRatio';
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
  <Link href={`/serie/${serieId}`}>
    <a>
      <Root isActive={isActive}>
        <AspectRatio ratio='16:9'>
          <Image src={img} />
        </AspectRatio>
      </Root>
    </a>
  </Link>
);
