import React from 'react';
import { SkeletonBox, SkeletonItem } from './styled';

export const Skeleton = (): JSX.Element => (
  <SkeletonBox>
    <SkeletonItem />
    <SkeletonItem />
    <SkeletonItem />
  </SkeletonBox>
);
