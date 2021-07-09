import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Image } from '@components/DataDisplay/Image';
import { AspectRatio } from '@components/Layout/AspectRatio';
import { Wrapper } from './styled';

const ThumbnailSlide = ({
  isActive,
  img,
  serieId,
  name,
}: ThumbnailSlideProps) => (
  <Link href={`/serie/${slugify(name)}/${serieId}`}>
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
  name: string;
};

export default ThumbnailSlide;
