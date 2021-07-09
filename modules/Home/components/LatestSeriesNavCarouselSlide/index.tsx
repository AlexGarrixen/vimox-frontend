import React from 'react';
import Link from 'next/link';
import { Image } from '@components/DataDisplay/Image';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Wrapper } from './styled';

const ThumbnailSlide = ({ isActive, img, serieId }: ThumbnailSlideProps) => (
  <Link href={`/serie/${serieId}`}>
    <a>
      <Wrapper isActive={isActive}>
        <AspectRatio ratio='16:9'>
          <Image src={img} />
        </AspectRatio>
      </Wrapper>
    </a>
  </Link>
);

type ThumbnailSlideProps = {
  isActive?: boolean;
  img?: string;
  serieId: string;
};

export default ThumbnailSlide;
