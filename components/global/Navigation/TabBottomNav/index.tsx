import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@components/Layout/Container';
import { Home } from '@components/Icon/Home';
import { Directory } from '@components/Icon/Directory';
import { Bookmark } from '@components/Icon/Bookmark';
import { Skeleton } from './Skeleton';
import { useMatchMedia } from '@hooks/useMatchMedia';
import { useSession } from '@contexts/Auth/hooks';
import { useAnimationScroll } from './hook';
import { TabBottonNavBox, TabsBox, Tab, IconBox } from './styled';

type LinkProps = {
  href: string;
  Icon: React.ElementType;
  isPrivate: boolean;
};

const links: LinkProps[] = [
  {
    href: '/',
    Icon: Home,
    isPrivate: false,
  },
  {
    href: '/directory',
    Icon: Directory,
    isPrivate: false,
  },
  {
    href: '/queue',
    Icon: Bookmark,
    isPrivate: true,
  },
];

export const TabBottomNav = () => {
  const router = useRouter();
  const isMd = useMatchMedia('(min-width: 960px)');
  const [session, loading] = useSession();
  const styles = useAnimationScroll(isMd);

  return isMd ? null : loading ? (
    <Skeleton />
  ) : (
    <TabBottonNavBox>
      <Container>
        <TabsBox style={styles}>
          {links.map(({ Icon, href, isPrivate }) => {
            const isActive = router.pathname === href;

            if (isPrivate && !session) return null;

            return (
              <Tab key={href}>
                <Link href={href}>
                  <a>
                    <IconBox isActive={isActive}>
                      <Icon lg color={isActive ? '#FFF' : '#377DFF'} />
                    </IconBox>
                  </a>
                </Link>
              </Tab>
            );
          })}
        </TabsBox>
      </Container>
    </TabBottonNavBox>
  );
};
