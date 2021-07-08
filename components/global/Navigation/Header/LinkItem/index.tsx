import React, { FC } from 'react';
import Link from 'next/link';
import { AnchorStyled } from './styled';

const LinkItem: FC<LinkItemProps> = ({ href, isActive, title }) => (
  <li>
    <Link href={href}>
      <AnchorStyled isActive={isActive}>{title}</AnchorStyled>
    </Link>
  </li>
);

export type LinkItemProps = {
  title?: string;
  isActive?: boolean;
  href?: string;
};

export default LinkItem;
