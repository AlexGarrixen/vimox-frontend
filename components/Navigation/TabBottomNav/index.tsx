import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '@components/DataDisplay/Typography';
import { Container } from '@components/Layout/Container';
import { Home } from '@components/Icon/Home';
import { Directory } from '@components/Icon/Directory';
import { useMatchMedia } from '@hooks/useMatchMedia';
import { TabBottonNavBox, Tab, IconBox } from './styled';

type LinkProps = {
  title: string;
  href: string;
  Icon: React.ElementType;
};

const links: LinkProps[] = [
  {
    title: 'Inicio',
    href: '/',
    Icon: Home,
  },
  {
    title: 'Directorio',
    href: '/directory',
    Icon: Directory,
  },
];

export const TabBottomNav = () => {
  const router = useRouter();
  const isMd = useMatchMedia('(min-width: 960px)');

  return isMd ? null : (
    <TabBottonNavBox>
      <Container>
        {links.map(({ title, Icon, href }) => {
          const isActive = router.pathname === href;

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
