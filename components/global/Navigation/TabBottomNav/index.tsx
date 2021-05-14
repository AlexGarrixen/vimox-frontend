import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Home } from '@components/Icon/Home';
import { Directory } from '@components/Icon/Directory';
import { Bookmark } from '@components/Icon/Bookmark';
import { Skeleton } from './Skeleton';
import { useMatchMedia } from '@hooks/useMatchMedia';
import { useSession } from '@contexts/Auth/hooks';
import { TabBottonNavBox, Tab, IconBox } from './styled';

type LinkProps = {
  title: string;
  href: string;
  Icon: React.ElementType;
  isPrivate: boolean;
};

const links: LinkProps[] = [
  {
    title: 'Inicio',
    href: '/',
    Icon: Home,
    isPrivate: false,
  },
  {
    title: 'Directorio',
    href: '/directory',
    Icon: Directory,
    isPrivate: false,
  },
  {
    title: 'Mi lista',
    href: '/queue',
    Icon: Bookmark,
    isPrivate: true,
  },
];

export const TabBottomNav = () => {
  const router = useRouter();
  const isMd = useMatchMedia('(min-width: 960px)');
  const [session, loading] = useSession();

  return isMd ? null : loading ? (
    <Skeleton />
  ) : (
    <TabBottonNavBox>
      <Container>
        {links.map(({ title, Icon, href, isPrivate }) => {
          const isActive = router.pathname === href;

          if (isPrivate && !session) return null;

          return (
            <Tab key={href}>
              <Link href={href}>
                <a>
                  <IconBox isActive={isActive}>
                    <Icon lg color={isActive ? '#FFF' : '#377DFF'} />
                  </IconBox>
                  <Typography primary={isActive} size='xs'>
                    {title}
                  </Typography>
                </a>
              </Link>
            </Tab>
          );
        })}
      </Container>
    </TabBottonNavBox>
  );
};
