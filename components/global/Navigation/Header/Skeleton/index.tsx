import React from 'react';
import { SkeletonBox, LinksBox, SkeletonLink } from './styled';

export const Skeleton = (): JSX.Element => (
  <SkeletonBox>
    <LinksBox>
      <SkeletonLink />
      <SkeletonLink />
      <SkeletonLink />
    </LinksBox>
    <LinksBox>
      <SkeletonLink />
      <SkeletonLink />
    </LinksBox>
  </SkeletonBox>
);
