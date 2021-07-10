import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchOutlined } from '@components/Icon/SearchOutlined';
import { Container } from '@components/Layout/Container';
import { AvatarDropdown } from '@components/Overlays/AvatarDropdown';
import { Button } from '@components/Form/Button';
import LinkItem from './LinkItem';
import { Skeleton } from './Skeleton';
import { useSession } from '@contexts/Auth/hooks';
import { useSeriesFinder } from '@hooks/useSeriesFinder';
import {
  HeaderBox,
  Nav,
  LinksBox,
  AnchorBrand,
  ActionsBox,
  IconButton,
} from './styled';

export const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const { showSeriesFinder } = useSeriesFinder();
  const shouldShowContent = useMemo(
    () => !['/login', '/signup', '/forgot-password'].includes(router.pathname),
    [router.pathname]
  );

  return (
    <HeaderBox>
      <Container>
        <Link href='/'>
          <AnchorBrand>
            <img src='/vimox-brand.svg' height={26} />
          </AnchorBrand>
        </Link>
        {shouldShowContent &&
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
                  {session && (
                    <LinkItem
                      title='Mi lista'
                      href='/me/library'
                      isActive={router.pathname === '/me/library'}
                    />
                  )}
                </LinksBox>
              </Nav>
              <ActionsBox>
                {!session && (
                  <Button size='sm' onClick={() => router.push('/login')}>
                    Inicia sesion
                  </Button>
                )}
                {session && <AvatarDropdown username={session.user.username} />}
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
