import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from '@components/Icon/Search';
import { Container } from '@components/Layout/Container';
import { User } from '@components/Overlays/User';
import { Button } from '@components/Form/Button';
import { Skeleton } from './Skeleton';
import { useSession } from '@contexts/Auth/hooks';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import {
  HeaderBox,
  Nav,
  LinksBox,
  AnchorStyled,
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
          <a>
            <img src='/logo.png' height={30} />
          </a>
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
                {isAuth && <User username={session.user.username} />}
                <IconButton onClick={showSeriesFinder}>
                  <Search color='#fff' xl />
                </IconButton>
              </ActionsBox>
            </>
          ))}
      </Container>
    </HeaderBox>
  );
};
