import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchOutlined } from '@components/Icon/SearchOutlined';
import { Container } from '@components/Layout/Container';
import { AvatarDropdown } from '@components/Overlays/AvatarDropdown';
import { Button } from '@components/Form/Button';
import { Skeleton } from './Skeleton';
import { useSession } from '@contexts/Auth/hooks';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import {
  HeaderBox,
  Nav,
  LinksBox,
  AnchorStyled,
  AnchorBrand,
  ActionsBox,
  IconButton,
} from './styled';

type LinkItemProps = {
  title: string;
  isActive: boolean;
  href: string;
};

const LinkItem = ({ href, isActive, title }: LinkItemProps) => (
  <li>
    <Link href={href}>
      <AnchorStyled isActive={isActive}>{title}</AnchorStyled>
    </Link>
  </li>
);

export const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const { showSeriesFinder } = useSeriesFinder();

  const isLoginRoute = router.pathname === '/login';
  const isAuth = session && session.token;

  return (
    <HeaderBox>
      <Container>
        <Link href='/'>
          <AnchorBrand>
            <img src='/vimox-brand.svg' height={26} />
          </AnchorBrand>
        </Link>
        {!isLoginRoute &&
          (loading ? (
            <Skeleton />
          ) : (
            <>
              <Nav>
                <LinksBox>
                  <LinkItem
                    title='Inicio'
                    href='/'
                    isActive={router.pathname === '/'}
                  />
                  <LinkItem
                    title='Directorio'
                    href='/directory'
                    isActive={router.pathname === '/directory'}
                  />
                  {isAuth && (
                    <LinkItem
                      title='Mi lista'
                      href='/queue'
                      isActive={router.pathname === '/queue'}
                    />
                  )}
                </LinksBox>
              </Nav>
              <ActionsBox>
                {!isAuth && (
                  <Button size='sm' onClick={() => router.push('/login')}>
                    Inicia sesion
                  </Button>
                )}
                {isAuth && <AvatarDropdown username={session.user.username} />}
                <IconButton onClick={showSeriesFinder}>
                  <SearchOutlined colorScheme='white' size={24} />
                </IconButton>
              </ActionsBox>
            </>
          ))}
      </Container>
    </HeaderBox>
  );
};
