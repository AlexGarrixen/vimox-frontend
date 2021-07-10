import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@components/Layout/Container';
import { HomeOutlined } from '@components/Icon/HomeOutlined';
import { DirectoryOutlined } from '@components/Icon/DirectoryOutlined';
import { BookmarkOutlined } from '@components/Icon/BookmarkOutlined';
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
    Icon: HomeOutlined,
    isPrivate: false,
  },
  {
    href: '/directory',
    Icon: DirectoryOutlined,
    isPrivate: false,
  },
  {
    href: '/me/library',
    Icon: BookmarkOutlined,
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
                      <Icon colorScheme={isActive ? 'white' : 'primary'} />
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
